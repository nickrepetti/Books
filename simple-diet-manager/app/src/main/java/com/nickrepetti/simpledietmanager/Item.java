package com.nickrepetti.simpledietmanager;

public class Item {

    private int id;
    private String name;
    private NutritionFacts nutritionFacts;

    public Item(String name, NutritionFacts nutritionFacts) {
        id = -1;
        this.name = name;
        this.nutritionFacts = nutritionFacts;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public NutritionFacts getNutritionFacts() {
        return nutritionFacts;
    }

    public void setNutritionFacts(NutritionFacts nutritionFacts) {
        this.nutritionFacts = nutritionFacts;
    }
}
