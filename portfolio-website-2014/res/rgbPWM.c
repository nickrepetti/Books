/*  The following code was written by Nick Repetti. Anyone is free to use it, without charge.
	If you use it, I ask that you mention my name somewhere, but this is not required. */

#include <avr/io.h>
#define F_CPU 8000000UL
#include <avr/delay.h>
#include <avr/interrupt.h>
#define MOSI 3
#define SCK 5
#define SS 2

void execute (unsigned char cmd, unsigned char data){
	PORTB &= ~(1<<SS); //initializing the packet by pulling SS low
	
	SPDR = cmd;					//start CMD transmission
	while(!(SPSR & (1<<SPIF))); //wait transfer finish
	
	SPDR = data;				//start DATA transmission
	while(!(SPSR & (1<<SPIF))); //wait transfer finish
	
	PORTB |= (1<<SS);	//terminate the packet by pulling SS high
}

static volatile uint16_t adc_result;	//  Declare a global variable to hold our ADC result

int main(void)
{
	DDRB = 0x02;  //  Enable OC1A (RED)
	DDRD = 0x40;  //  Enable OC0A (BLUE)
	DDRB |= (1<<MOSI)|(1<<SCK)|(1<<SS); //MOSI and SCK are output
	SPCR = (1<<SPE)|(1<<MSTR)|(1<<SPR0); //enable SPI as master
	
	//  Initialize Timer1/0
	//  Fast PWM Mode (8bit), Enable OC0A/OC1A/OC1B
	TCCR0A |= ( 1 << COM0A0 ) | ( 1 << WGM01 ) | ( 1 << WGM00 );
	TCCR1A |=  ( 1 << COM1A0 ) | ( 1 << WGM10 ) | ( 1 << WGM11 );
	
	execute( 0x09, 0b00000001 ); 
	execute( 0x0B, 0X01 ); 
	execute( 0x0C,0x01 );
	
	ADCSRA |= ( 1 << ADPS2 );	//  16 Prescaler
	ADMUX |= ( 1 << REFS0 ) | ( 1 << REFS1 );	//  Internal 1.1 Voltage Reference
	ADCSRA |= 1 << ADIE;	//  Enable interrupts
	ADCSRA |= 1 << ADEN;	//  Enable ADC
	
	sei();	//  Enable interrupts
	
	ADCSRA |= 1 << ADSC;	//  Start conversion
	

	
	while(1)
	{
		_delay_ms(1500);
		int tmp = adc_result % 10;
		execute( 0x01, tmp + 48 );  
		
		if ( adc_result > 83 ){
			//  Set the LED to Red
			TCCR0B = 0x00;
			TCCR1B = 0x19;	// 1024 Prescaler
			OCR1A = 0x7FFF; //  50% Duty Cycle
		}
		else{
			//  Set the LED to Blue
			TCCR1B = 0x00;
			TCCR0B = 0x09;	//  1024 Prescaler
			OCR0A = 0x7F;  //  50% Duty Cycle
		}
	}
}

ISR( ADC_vect ){
	uint8_t adc_low = ADCL;
	adc_result = ( ADCH << 8 ) | adc_low;	//  Place ADCH:ADCL into a variable (Only uses 10 bits)
	
	ADCSRA |= 1 << ADSC;	//  Restart conversion
}
