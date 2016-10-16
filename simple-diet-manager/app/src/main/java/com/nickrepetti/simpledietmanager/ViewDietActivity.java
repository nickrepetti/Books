package com.nickrepetti.simpledietmanager;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.support.v4.view.ViewPager;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import java.util.ArrayList;

public class ViewDietActivity extends ActionBarActivity {

    private static final String TAG = "ViewDietActivity";
    private DietManagerDbAdapter dbHelper;
    private ViewPager viewPager;
    private long dietId;
    private int position;
    private String dietName;
    private Intent intent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_view_diet);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        dbHelper = new DietManagerDbAdapter(this);

        viewPager = (ViewPager) findViewById(R.id.view_diet_pager);

        intent = getIntent();

        dietId = intent.getLongExtra("dietId", 0);
        dietName = intent.getStringExtra("dietName");
        position = 0;

        Log.d(TAG, "onCreate:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
   }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_view_diet, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onPause(){
        super.onPause();

        position = viewPager.getCurrentItem();

        Log.d(TAG, "onPause:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
    }

    @Override
    protected void onResume() {
        super.onResume();

        //  Set Action Bar Title to dietName

        dbHelper.open();

        ArrayList<Day> dayList = dbHelper.getDayList(dietId);

        DietPagerAdapter pagerAdapter = new DietPagerAdapter(getSupportFragmentManager(), this, dayList);

        viewPager.setAdapter(pagerAdapter);
        viewPager.setCurrentItem(position);

        Log.d(TAG, "onResume:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
    }

    @Override
    protected void onStop(){
        super.onStop();
        Log.d(TAG, "onStop:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "onRestart:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d(TAG, "onDestroy:\n" + "  dietId: " + dietId + "\n  dietName: " + dietName + "\n  position: " + position);
    }
}