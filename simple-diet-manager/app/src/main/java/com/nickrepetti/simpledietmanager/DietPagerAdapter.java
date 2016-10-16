package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import java.util.ArrayList;

public class DietPagerAdapter extends FragmentStatePagerAdapter{

    protected Context context;
    private ArrayList<Day> dayList;
    public DietPagerAdapter(FragmentManager fm, Context context, ArrayList<Day> dayList) {
        super(fm);
        this.context = context;
        this.dayList = dayList;
    }

    @Override
    public Fragment getItem(int position) {
        Fragment fragment = new DietDayFragment();

        Day day = dayList.get(position);

        Bundle args = new Bundle();
        args.putLong("dayId", day.getId());

        fragment.setArguments(args);

        return fragment;
    }

    @Override
    public int getCount() {
        return dayList.size();
    }

    @Override
    public CharSequence getPageTitle(int position){
        return dayList.get(position).getDayName();
    }
}
