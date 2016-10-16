package com.nickrepetti.simpledietmanager;

import java.util.ArrayList;

public class User {

    private int id;
    private String userName;
    private String password;
    private String email;
    private String phoneNumber;
    private UserAddress address;
    private ArrayList<Diet> dietList;

    public User(String userName, String password, String email, String phoneNumber, UserAddress address) {
        id = -1;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        dietList = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public UserAddress getAddress() {
        return address;
    }

    public void setAddress(UserAddress address) {
        this.address = address;
    }

    public ArrayList<Diet> getDietList() {
        return dietList;
    }

    public void setDietList(ArrayList<Diet> dietList) {
        this.dietList = dietList;
    }
}