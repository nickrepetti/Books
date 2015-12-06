package com.nickrepetti.duck.behavior.fly;

public class FlyNoWay implements FlyBehavior{
	
	public FlyNoWay(){}
	
	public void fly(){
		System.out.println("I can't fly!");
	}
}
