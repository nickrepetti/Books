package com.nickrepetti.simpledietmanager;

public class HelperFunctions {

    /*
      Takes in a time amount in amount of minutes
      past midnight. Returns a string in the format of
      hh:mm AM or hh:mm PM
     */
    public static String getTime(long time){
        String amPm = " AM";
        int hour = (int) time / 60;
        int minutes = (int) time % 60;
        int lDigit = minutes / 10;
        int rDigit = minutes % 10;

        if (time > 719) {
            amPm = " PM";
            hour -= 12;
        }
        if (hour == 0)
            hour = 12;

        return(hour + ":" + lDigit + rDigit + amPm);
    }
}
