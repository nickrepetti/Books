package com.nickrepetti.gui;

import com.nickrepetti.duck.*;
import com.nickrepetti.duck.behavior.fly.*;
import com.nickrepetti.duck.behavior.quack.*;
import java.util.Scanner;

public class DuckSimulator {
	
	private Scanner input;
	
	public DuckSimulator() {}
	
	public static void main(String args[]) {
		DuckSimulator duckSimulator = new DuckSimulator();
		duckSimulator.init();
		duckSimulator.run();
		duckSimulator.close();
	}
	
	/*
	* This procedure runs the DuckSimulator application
	*/
	public void init() {
		input = new Scanner(System.in);
	}
	
	/*
	* This procedure runs the DuckSimulator application
	*/
	public void close() {
		input.close();
		
		displayGoodbye();
	}
	
	/*
	* This procedure runs the DuckSimulator application
	*/
	public void run() {
		// Display Welcome Message
		displayWelcome();
		
		// Duck Selection Loop
		while (true) {
			int duckSelection = displayAndGetDuckSelection();

			// Parse Duck Selection
			if (!selectedExit(duckSelection)) {
				// Create Duck
				Duck duck = createDuckFromSelection(duckSelection);
				
				// Action Selection Loop
				while (true) {
					int actionSelection = displayAndGetActionSelection();

					if (!selectedBackOrExit(actionSelection)) {
						
						int actionStatus = parseActionSelection(actionSelection);
					}
					else if (selectedBack(actionSelection)) {
						// BACK
						break;
					}
					else {
						// EXIT
						return;
					}
				}
			}
			else {
				// EXIT
				return;
			}
		}

	}
	
	private void displayWelcome() {
		System.out.println("Welcome to the Duck Simulator!");
		System.out.println();
	}
	
	private void displayGoodbye() {
		System.out.println("Thanks for Playing!");
	}
	
	private void displayInvalidSelection() {
		System.out.println("Invalid selection. Please try again.");
		System.out.println();
	}
	
	private void displayQuackActionChanged() {
		System.out.println("Quack Action Successfully Changed!");
		System.out.println();
	}
	
	private void displayFlyActionChanged() {
		System.out.println("Fly Action Successfully Changed!");
		System.out.println();
	}
	
	private void displayDuckSelection() {
		System.out.println("Please select a Duck to Create:");
		System.out.println("1. Mallard Duck");
		System.out.println("2. Rubber Duck");
		System.out.println("3. Wooden Duck");
		System.out.println("9. Exit");
		System.out.print(">: ");
	}
	
	private void displayActionSelection() {
		System.out.println("Please select an action:");
		System.out.println("1. Display");
		System.out.println("2. Quack");
		System.out.println("3. Fly");
		System.out.println("4. Change Quack Action");
		System.out.println("5. Change Fly Action");
		System.out.println("8. Back");
		System.out.println("9. Exit");
		System.out.print(">: ");
	}
	
	private void displayQuackSelection() {
		System.out.println("Please select a Quack Action:");
		System.out.println("1. Quack");
		System.out.println("2. Squeak");
		System.out.println("3. Mute");
		System.out.println("8. Back");
		System.out.println("9. Exit");
		System.out.print(">: ");
	}
	
	private void displayFlySelection() {
		System.out.println("Please select a Fly Action:");
		System.out.println("1. Fly with Wings");
		System.out.println("2. Fly with Rockets");
		System.out.println("3. No Flying");
		System.out.println("8. Back");
		System.out.println("9. Exit");
		System.out.print(">: ");
	}
	
	private int getSelection() {
		String selectionStr = input.nextLine().trim();
		
		int selection = -1;
		if (isNumeric(selectionStr)){
			selection = Integer.parseInt(selectionStr);
		}
		
		System.out.println();
		
		return selection;
	}
	
	private boolean selectedBack(int selection){
		return selection == 8;
	}
	
	private boolean selectedExit(int selection){
		return selection == 9;
	}
	
	private boolean selectedBackOrExit(int selection){
		return selectedBack(selection) || selectedExit(selection);
	}
	
	private boolean isNumeric(String input){
		// Match any positive integer or 0
		String pattern = "\\d+";
		
		return input.matches(pattern);
	}

	private boolean isValidDuckSelection(int selection) {
		return (selection == 1 ||
				selection == 2 ||
				selection == 3 ||
				selection == 9);
	}
	
	private boolean isValidActionSelection(int selection) {
		return (selection == 1 ||
				selection == 2 ||
				selection == 3 ||
				selection == 4 ||
				selection == 5 ||
				selection == 8 ||
				selection == 9);
	}
	
	private boolean isValidQuackSelection(int selection) {
		return (selection == 1 ||
				selection == 2 ||
				selection == 3 ||
				selection == 8 ||
				selection == 9);
	}
	
	private boolean isValidFlySelection(int selection) {
		return (selection == 1 ||
				selection == 2 ||
				selection == 3 ||
				selection == 8 ||
				selection == 9);
	}
	
	private int displayAndGetDuckSelection() {
		// Duck Selection Loop
		while (true) {
			// Display Ducks
			displayDuckSelection();
				
			// Get Input
			int duckSelection = getSelection();
				
			if (isValidDuckSelection(duckSelection)) {
				return duckSelection;
			}
			else {
				// Invalid Duck Selection
				displayInvalidSelection();
			}
		}
	}
	
	private int displayAndGetActionSelection() {
		// Duck Action Loop
		while (true) {
			// Display Duck Actions
			displayActionSelection();
							
			// Get Input
			int actionSelection = getSelection();
							
			if (isValidActionSelection(actionSelection)){
				return actionSelection;
			}
			else {
				// Invalid Action Selection
				displayInvalidSelection();
			}
		}
	}
	
	private int displayAndGetQuackSelection() {
		// Duck Action Loop
		while (true) {
			// Display Duck Actions
			displayQuackSelection();
							
			// Get Input
			int quackSelection = getSelection();
							
			if (isValidQuackSelection(quackSelection)){
				return quackSelection;
			}
			else {
				// Invalid Action Selection
				displayInvalidSelection();
			}
		}
	}
	
	private int displayAndGetFlySelection() {
		// Duck Action Loop
		while (true) {
			// Display Duck Actions
			displayFlySelection();
							
			// Get Input
			int flySelection = getSelection();
							
			if (isValidFlySelection(flySelection)){
				return flySelection;
			}
			else {
				// Invalid Action Selection
				displayInvalidSelection();
			}
		}
	}
	
	private Duck createDuckFromSelection(int selection) {
		// Duck duck = empty duck
		Duck duck = null;
		
		if (selection == 1) {
			duck = new MallardDuck();
		}
		else if (selection == 2) {
			duck = new RubberDuck();	
		}
		else if (selection == 3) {
			duck = new WoodenDuck();
		}
		
		return duck;
	}
	
	private QuackBehavior getQuackActionFromSelection(int selection) {
		QuackBehavior quackBehavior = null;
		
		if (selection == 1) {
			quackBehavior = new Quack();
		}
		else if (selection == 2) {
			quackBehavior = new Squeak();	
		}
		else if (selection == 3) {
			quackBehavior = new QuackNoWay();
		}
		
		return quackBehavior;
	}
	
	private FlyBehavior getFlyActionFromSelection(int selection) {
		FlyBehavior flyBehavior = null;
		
		if (selection == 1) {
			flyBehavior = new FlyWithWings();
		}
		else if (selection == 2) {
			flyBehavior = new FlyRocketPowered();	
		}
		else if (selection == 3) {
			flyBehavior = new FlyNoWay();
		}
		
		return flyBehavior;
	}
	
	int parseActionSelection(int selection) {
		// IF ACTION DISPLAY
		if (selection == 1) {
			// Display
			duck.display();
			System.out.println();
		}
		else if (selection == 2) {
			// Quack
			duck.performQuack();
			System.out.println();
		}
		else if (selection == 3) {
			// Fly
			duck.performFly();
			System.out.println();
		}
		else if (selection == 4) {
			// Change Quack Action
			int quackSelection = displayAndGetQuackSelection();
								
			int quackStatus = parseQuackSelection(quackSelection);
		}
		else if (selection == 5) {
			// Change Fly Action
			int flySelection = displayAndGetFlySelection();
								
			int flyStatus = parseFlySelection(flySelection);
		}
		
		return -1;
	}
	
	int parseQuackSelection(int selection) {
		if (!selectedBackOrExit(selection)) {
			// Change Quack Behavior
			QuackBehavior quackAction = getQuackActionFromSelection(selection);
			duck.setQuackBehavior(quackAction);
									
			// Notify of Change
			displayQuackActionChanged();
		}
		else if (selectedBack(selection)) {
			// BACK
		}
		else {
			// EXIT
			return 0;
		}
		
		return 0;
	}
	
	int parseFlySelection(int selection) {
		if (!selectedBackOrExit(selection)) {
			// Change Fly Behavior
			FlyBehavior flyAction = getFlyActionFromSelection(selection);
			duck.setFlyBehavior(flyAction);
									
			// Notify of Change
			displayFlyActionChanged();
		}
		else if (selectedBack(selection)) {
			// BACK
		}
		else {
			// EXIT
			return 0;
		}
		
		return 0;
	}
}
