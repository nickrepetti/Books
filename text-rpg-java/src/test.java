import java.util.Scanner;

/*
You are sitting in Jail.
A mysterious stranger pays your bail.
You are now free.
The only thing you have on your person is a token from the mysterious stranger
The only thing on the token is a symbol


*/

public class test {
	public static void main( String args[] ){
		Player hero = new Player();
		Enemy boar = new Enemy( "Boar", 3, 24, 5, 10 );
		Enemy minotaur = new Enemy( "Minotaur", 9, 40, 20, 25 );
		Enemy fireSerpent = new Enemy( "Fire Serpent", 7, 36, 10, 20 );
		Enemy boarKing = new Enemy( "The Boar King", 18, 75, 100, 75 );
		Enemy kingKomodo = new Enemy( "King Komodo", 30, 250, 500, 100);
		String name;
		int choice = -1;
		String ans;
		
		Scanner input = new Scanner( System.in );
		System.out.print( "Please enter your name Hero: " );
		
		name = input.nextLine();

		System.out.println( "Hello " + name + ", welcome to the game!" );
		hero.getStats();
		
		while ( true ){
			System.out.println( "\nWhere would you like to go?\n1. Town\n2. Grasslands\n3. Exit Game\n>: " );
				
			choice = input.nextInt();
			
			if ( choice == 3 ){
				System.out.println( "Thanks for playing!" );
				return;
			}
			else if ( choice == 2 ){
				System.out.println( "You venture out into the grasslands.\n\n" );
				System.out.println( "Choose your opponent:\n1. Boar\n2. Fire Serpent\n3. Minotaur\n4. The Boar King\n5. King Komodo\n>:" );
				choice = input.nextInt();
				
				if ( choice == 1 ){
					if ( hero.fight( boar ) == 0 )
						return;
				}
				else if ( choice == 2 ){
					if ( hero.fight( fireSerpent ) == 0 )
						return;
				}
				else if ( choice == 3 ){
					if ( hero.fight( minotaur ) == 0 )
						return;
				}
				else if ( choice == 4 ){
					if ( hero.fight( boarKing ) == 0 )
						return;
				}
				else if ( choice == 5 ){
					if ( hero.fight( kingKomodo ) == 0 )
						return;
				}
			}
			else if ( choice == 1 ){
				System.out.println( "Welcome to the town. Please select where you want to go.\n1. Inn\n2. Bank\n3. Shop\n>: " );
				choice = input.nextInt();	
				
				if ( choice == 1 ){
					if ( hero.getGold() >= 10 ){
						System.out.println( "Welcome to the Inn.\nYou have been completely healed. ( -10 Gold)" );
						hero.setGold( hero.getGold() - 10 );
						hero.setCurHP( hero.getMaxHP() );
						hero.getStats();
					}
					else
						System.out.println( "You need 10 Gold to heal.  Please come again when you get a job you lazy bum!" );
				}
			}
		}
	}
}
