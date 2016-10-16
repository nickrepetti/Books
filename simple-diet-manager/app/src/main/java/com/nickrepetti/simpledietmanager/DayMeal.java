package com.nickrepetti.simpledietmanager;

public class DayMeal {

    private Meal meal;
    private String timeOfDay;

    public DayMeal(Meal meal, String timeOfDay) {
        this.meal = meal;
        this.timeOfDay = timeOfDay;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public String getTimeOfDay() {
        return timeOfDay;
    }

    public void setTimeOfDay(String timeOfDay) {
        this.timeOfDay = timeOfDay;
    }
}
