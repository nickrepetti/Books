package com.nickrepetti.simpledietmanager;

import java.util.ArrayList;

public class Diet {

    private static int activeID = -1;

    private long id;
    private String dietName;
    private ArrayList<Day> dayList;

    public Diet(String dietName){
        this(-1, dietName);
    }

    public Diet(long id, String dietName) {
        this.id = id;
        this.dietName = dietName;
        dayList = new ArrayList<Day>();
    }

    public static int getActiveID() {
        return activeID;
    }

    public static void setActiveID(int activeID) {
        Diet.activeID = activeID;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDietName() {
        return dietName;
    }

    public void setDietName(String dietName) {
        this.dietName = dietName;
    }

    public ArrayList<Day> getDayList() {
        return dayList;
    }

    public void setDayList(ArrayList<Day> dayList) {
        this.dayList = dayList;
    }
}