package com.nickrepetti.simpledietmanager;

import java.util.ArrayList;

public class Day {

    private long id;
    private String dayName;
    private String date;
    private ArrayList<DayMeal> mealList;

    public Day(String dayName, String date){
        this(-1, dayName, date);
    }

    public Day(long id, String dayName, String date) {
        this.id = id;
        this.dayName = dayName;
        this.date = date;
        mealList = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDayName() {
        return dayName;
    }

    public void setDayName(String dayName) {
        this.dayName = dayName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public ArrayList<DayMeal> getMealList() {
        return mealList;
    }

    public void setMealList(ArrayList<DayMeal> mealList) {
        this.mealList = mealList;
    }
}
