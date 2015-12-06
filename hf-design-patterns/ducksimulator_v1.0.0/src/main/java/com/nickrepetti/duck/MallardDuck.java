package com.nickrepetti.duck;

import com.nickrepetti.duck.behavior.fly.FlyWithWings;
import com.nickrepetti.duck.behavior.quack.Quack;

public class MallardDuck extends Duck{
	
	public MallardDuck(){
		flyBehavior = new FlyWithWings();
		quackBehavior = new Quack();
	}
	
	public void display(){
		System.out.println("I'm a Mallard Duck!");
	}
}
