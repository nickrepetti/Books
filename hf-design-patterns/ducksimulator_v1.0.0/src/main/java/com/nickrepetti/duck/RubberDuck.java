package com.nickrepetti.duck;

import com.nickrepetti.duck.behavior.fly.FlyNoWay;
import com.nickrepetti.duck.behavior.quack.Squeak;

public class RubberDuck extends Duck{
	
	public RubberDuck(){
		flyBehavior = new FlyNoWay();
		quackBehavior = new Squeak();
	}
	
	public void display(){
		System.out.println("I'm a Rubber Duck!");
	}
}
