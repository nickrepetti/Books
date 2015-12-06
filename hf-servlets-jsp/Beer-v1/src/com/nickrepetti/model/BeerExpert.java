package com.nickrepetti.model;

import java.util.*;

public class BeerExpert {
	public ArrayList<String> getBrands(String color) {
		String selection = color.toUpperCase();

		ArrayList<String> beerList = new ArrayList<String>();
		
		if (selection.equals("LIGHT")) {
			beerList.add("Bud Light");
			beerList.add("Miller Light");
		}
		else if (selection.equals("AMBER")) {
			beerList.add("Michelob Amberboch");
			beerList.add("Some other amber beer");
		}
		else if (selection.equals("BROWN")) {
			beerList.add("Budweiser");
		}
		else if (selection.equals("DARK")) {
			beerList.add("Guiness");
		}
		else {
			// Invalid selection
		}
		
		return beerList;
	}
}