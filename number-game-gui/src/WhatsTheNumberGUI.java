import javax.swing.JOptionPane;

public class WhatsTheNumberGUI{
	public static void main( String args[] ){
		int difficulty, guess, min, max, num, cnt = 0, numTries;
		
		JOptionPane.showMessageDialog( null, "Welcome to the number guessing game! Let's set up the game." );
		difficulty = Integer.parseInt( JOptionPane.showInputDialog( "Difficulty: ( 1 - easy, 2 - medium, 3 - hard, 4 - extreme )" ) );
		switch ( difficulty ){
			case 1:
				numTries = 5;
				min = 1;
				max = 30;
				break;
			case 2:
				numTries = 5;
				min = 1;
				max = 50;
				break;
			case 3:
				numTries = 5;
				min = 1;
				max = 100;
				break;
			case 4:
				numTries = 3;
				min = 1;
				max = 100;
				break;
			default:
				JOptionPane.showMessageDialog( null, "Error, bad difficulty setting. Exiting..." );
				return;
		}
		
		JOptionPane.showMessageDialog( null, "You have " + numTries + " chances to guess my number (" + min + "-" + max + ")" );
		
		num = min + ( int )( Math.random( ) * ( max - min + 1 ) );
		
		while ( cnt < numTries ){
			guess = Integer.parseInt( JOptionPane.showInputDialog( "Enter your guess:" ) );
			cnt++;
			
			if ( guess < num )
				JOptionPane.showMessageDialog( null, "Too low, try higher" );
			else if ( guess > num )
				JOptionPane.showMessageDialog( null, "Too high, try lower" );
			else{
				JOptionPane.showMessageDialog( null, "You got it! The number was " + num + " and it took you " + cnt + " guesses!" );
				return;
			}
		}
		
		JOptionPane.showMessageDialog( null, "You lose! The number was " + num );
	}
}