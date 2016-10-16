package com.nickrepetti.simpledietmanager;

public class UserAddress {

    private int id;
    private String address;
    private short zipCode;
    private String state;

    public UserAddress(String address, short zipCode, String state) {
        id = -1;
        this.address = address;
        this.zipCode = zipCode;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public short getZipCode() {
        return zipCode;
    }

    public void setZipCode(short zipCode) {
        this.zipCode = zipCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
