
public class Enemy {
	private int damage, curHP, maxHP, gold, experience;
	private String name;
	
	public Enemy( String nm, int dmg, int mHP, int gld, int exp ){
		damage = dmg;
		maxHP = mHP;
		curHP = maxHP;
		gold = gld;
		name = nm;
		experience = exp;
	}

	public int getCurHP(){
		return curHP;
	}	
	
	public int getExperience(){
		return experience;
	}	
	
	public String getName(){
		return name;
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
}
