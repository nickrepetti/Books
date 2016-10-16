import java.util.Scanner;


public class Player {
	private int damage, curHP, maxHP, gold, level, experience;
	
	public Player(){
		damage = 100;
		maxHP = 500;
		curHP = 30;
		gold = 30;
		level = 1;
		experience = 0;
	}
	
	public int getLevel(){
		return level;
	}
	
	public void setLevel( int l ){
		level = l;
	}
	
	public int getCurHP(){
		return curHP;
	}	
	
	public int getMaxHP(){
		return maxHP;
	}	

	public int getDamage(){
		return damage;
	}
	
	public int getGold(){
		return gold;
	}
	
	public void setCurHP( int hp ){
		curHP = hp;
	}
	
	public void setMaxHP( int hp ){
		maxHP = hp;
	}
	
	public void setDamage( int dmg ){
		damage = dmg;
	}	
	
	public void setGold( int gld ){
		gold = gld;
	}
	
	public int getExperience(){
		return experience;
	}
	
	public void getStats(){
		System.out.println( "Your current stats are:\nHP: " + getCurHP() + "/" + getMaxHP() );
		System.out.println( "Damage: " + getDamage() );
		System.out.println( "Gold: " + getGold() );
		System.out.println( "Experience: " + getExperience() + "/50" );
		System.out.println( "Level: " + getLevel() );
	}
	
	public void setExperience( int exp ){
		experience = exp;
	}
	
	public int fight( Enemy monster ){
		Scanner inpt = new Scanner( System.in );
		String tmp;
		
		System.out.println( "A wild " + monster.getName() + " appears!\n" );
		
		while ( true ){
			if ( getCurHP() <= 0 ){
				System.out.println( "You have died!");
				return 0;
			}
			else if ( monster.getCurHP() <= 0 ){
				System.out.println( "You have slain the " + monster.getName() + "!  Here is " + monster.getGold() + " gold." );
				setGold( getGold() + monster.getGold() );
				monster.setCurHP( monster.getMaxHP() );
				setExperience( getExperience() + monster.getExperience() );
				getStats();
				if ( getExperience() >= 50 ){
					setLevel( getLevel() + 1 );
					System.out.println( "Congratulations you have reached level " + getLevel() + "!" );
					System.out.println( "You have gained 2 damage and 5 hp!" );
					setExperience( 0 );
					setDamage( getDamage() + 2 );
					setMaxHP( getMaxHP() + 5 );
				}
				return 1;
			}
			
			System.out.println( "The " + monster.getName() + " attacks you for " + monster.getDamage() + " damage!" );
			setCurHP( getCurHP() - monster.getDamage() );
			System.out.println( "Hero's HP: " + getCurHP() + "/" + getMaxHP() );
			System.out.println( "Press Enter to Continue..." );
			tmp = inpt.nextLine();
			System.out.println( "You attack the " + monster.getName() + " for " + getDamage() + " damage!" );
			monster.setCurHP( monster.getCurHP() - getDamage() );					
			System.out.println( monster.getName() + "'s HP: " + monster.getCurHP() + "/" + monster.getMaxHP() );
			System.out.println( "Press Enter to Continue..." );
			tmp = inpt.nextLine();
		}
	}
}
