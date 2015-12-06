package com.nickrepetti.duck;

import com.nickrepetti.duck.behavior.fly.FlyNoWay;
import com.nickrepetti.duck.behavior.quack.QuackNoWay;

public class WoodenDuck extends Duck{
	
	public WoodenDuck(){
		flyBehavior = new FlyNoWay();
		quackBehavior = new QuackNoWay();
	}
	
	public void display(){
		System.out.println("I'm a Wooden Duck!");
	}
}
