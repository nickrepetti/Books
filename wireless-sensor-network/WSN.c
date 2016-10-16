#define F_CPU 8000000UL
#include <avr/io.h>
#include <util/delay.h>
#include <avr/interrupt.h>
#include <avr/sleep.h>


//  Define 5 flash memory locations to be used as the buffer
#define BUFFER_ONE * (volatile unsigned char *) 0x0115
#define BUFFER_TWO * (volatile unsigned char *) 0x0116
#define BUFFER_THREE * (volatile unsigned char *) 0x0117
#define BUFFER_FOUR * (volatile unsigned char *) 0x0118
#define BUFFER_FIVE * (volatile unsigned char *) 0x0119

static volatile uint16_t adc_result;	//  Declare a global variable to hold our ADC result

int main(){
	DDRD |= 0xFF;  //  LED Bar as output
	DDRB |= 0x03;  //  Enable OC1A
	
	//  Initialize Timer1/0
	//  Fast PWM Mode (8bit), Enable OC0A/OC1A/OC1B
	TCCR0A |= ( 1 << COM0A0 ) | ( 1 << WGM01 ) | ( 1 << WGM00 );
	TCCR1A |=  ( 1 << COM1A0 ) | ( 1 << COM1B0 ) | ( 1 << WGM10 ) | ( 1 << WGM11 );
	
	ADCSRA |= ( 1 << ADPS2 );	//  16 Prescaler
	ADMUX |= ( 1 << REFS0 ) | ( 1 << REFS1 );	//  Internal 1.1 Voltage Reference
	ADCSRA |= 1 << ADIE;	//  Enable interrupts
	ADCSRA |= 1 << ADEN;	//  Enable ADC
	
	sei();	//  Enable interrupts
	
	ADCSRA |= 1 << ADSC;	//  Start conversion
	
	//  Set the SM1 and SM0 Bits in the SMCR for power saver mode
	set_sleep_mode(SLEEP_MODE_PWR_SAVE);  
	cli();  //  Turn off interrupts so it does not wake up from the ADC
	
	TCCR2A |= 0x00;  //  Configure Timer2
	TCCR2B |= 0x06;  //  Start Timer 2
			
	int bufferCount = 1;  //  Which location of the buffer we are currently in
	int transmitLimit = 0;  //  Tracks when 10 values needed to be averaged
	int tempAverage = 0;  //  Variable to hold the average of 10 A2D results
	
	sleep_enable();  //  Start sleeping
	while (1){
		sei();  //  On wakeup, enable interrups again	
		int temp = (uint8_t) ( adc_result );  //  Calibrate sensor, convert to a byte

		PORTD = temp;

		//  If the temperature is above 80 degrees F, I stop Timer 0
		//  and start Timer 1.  That is, I stop the blue PWM, and send
		//  out the Red one.  When the temperature is below 80, the opposite happens
		if ( adc_result > 80 ){
			TCCR0B = 0x00;
			TCCR1B = 0x1D;	// 1024 Prescaler
			OCR1A = 0x7FFF; //  50% Duty Cycle
		}
		else{
			TCCR1B = 0x00;
			TCCR0B = 0x0D;	//  1024 Prescaler
			OCR0A = 0x1F;  //  50% Duty Cycle
		}
		
		//  Based on what location the bufferCount is at, place the current temp into 
		//  the buffer
		switch ( bufferCount ){
			case 1:
				BUFFER_ONE = temp;
			case 2:
				BUFFER_TWO = temp;
			case 3:
				BUFFER_THREE = temp;
			case 4:
				BUFFER_FOUR = temp;
			case 5:
				BUFFER_FIVE = temp;
			default:
				break;
		}			
		
		//  After the temperature was stored into the buffer, increment the count
		bufferCount++;
		
		//  Reset the buffer location once it reaches the end
		if ( bufferCount == 6 )
			bufferCount = 1;
		
		//  Only averaging 10 values, so reset the count once it gets to 10
		if ( transmitLimit > 9 )
			transmitLimit = 0;
		
		tempAverage += temp;  //  Add the 10 values together
		transmitLimit++;  
		
		if ( transmitLimit == 9 ){
			tempAverage /= 10;
			
			//  Now this is where I would send the data
			//  ex: transmit(tempAverage);
			
			tempAverage = 0;	
		}		
	}
	
	return 0;
}

ISR( ADC_vect ){
	uint8_t adc_low = ADCL;
	adc_result = ( ADCH << 8 ) | adc_low;	//  Place ADCH:ADCL into a variable (Only uses 10 bits)
	
	ADCSRA |= 1 << ADSC;	//  Restart conversion
} 