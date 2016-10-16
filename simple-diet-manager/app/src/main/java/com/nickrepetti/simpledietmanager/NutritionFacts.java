package com.nickrepetti.simpledietmanager;

public class NutritionFacts {

    private int id;
    private int calories;
    private int fatCalories;
    private int fat;
    private int saturatedFat;
    private int cholesterol;
    private int sodium;
    private int carbs;
    private int fiber;
    private int sugars;
    private int protein;
    private float price;

    public NutritionFacts(int calories, int fatCalories, int fat, int saturatedFat, int cholesterol, int sodium, int carbs, int fiber, int sugars, int protein, float price) {
        id = -1;
        this.calories = calories;
        this.fatCalories = fatCalories;
        this.fat = fat;
        this.saturatedFat = saturatedFat;
        this.cholesterol = cholesterol;
        this.sodium = sodium;
        this.carbs = carbs;
        this.fiber = fiber;
        this.sugars = sugars;
        this.protein = protein;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public int getFatCalories() {
        return fatCalories;
    }

    public void setFatCalories(int fatCalories) {
        this.fatCalories = fatCalories;
    }

    public int getFat() {
        return fat;
    }

    public void setFat(int fat) {
        this.fat = fat;
    }

    public int getSaturatedFat() {
        return saturatedFat;
    }

    public void setSaturatedFat(int saturatedFat) {
        this.saturatedFat = saturatedFat;
    }

    public int getCholesterol() {
        return cholesterol;
    }

    public void setCholesterol(int cholesterol) {
        this.cholesterol = cholesterol;
    }

    public int getSodium() {
        return sodium;
    }

    public void setSodium(int sodium) {
        this.sodium = sodium;
    }

    public int getCarbs() {
        return carbs;
    }

    public void setCarbs(int carbs) {
        this.carbs = carbs;
    }

    public int getFiber() {
        return fiber;
    }

    public void setFiber(int fiber) {
        this.fiber = fiber;
    }

    public int getSugars() {
        return sugars;
    }

    public void setSugars(int sugars) {
        this.sugars = sugars;
    }

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
