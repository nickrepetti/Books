package com.nickrepetti.simpledietmanager;

import java.util.ArrayList;

public class Meal {

    private int id;
    private String name;
    private ArrayList<MealItem> itemList;

    public Meal(String name) {
        id = -1;
        this.name = name;
        itemList = new ArrayList<>();
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

    public ArrayList<MealItem> getItemList() {
        return itemList;
    }

    public void setItemList(ArrayList<MealItem> itemList) {
        this.itemList = itemList;
    }
}
