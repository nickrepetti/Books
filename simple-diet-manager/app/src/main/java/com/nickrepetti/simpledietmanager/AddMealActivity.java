package com.nickrepetti.simpledietmanager;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Spinner;
import android.widget.TimePicker;
import android.widget.Toast;

public class AddMealActivity extends ActionBarActivity implements AdapterView.OnItemSelectedListener{

    private DietManagerDbAdapter dbHelper;
    private long dayId;
    private String choice;
    private String[] options;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_meal);

        getSupportActionBar().setDisplayHomeAsUpEnabled(true);

        dbHelper = new DietManagerDbAdapter(this);
        dbHelper.open();

        Intent intent = getIntent();
        dayId = intent.getLongExtra("MealDayId", 0);

        Spinner category = (Spinner) findViewById(R.id.add_meal_sp_category);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.add_meal_sp_category, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        category.setAdapter(adapter);
        category.setOnItemSelectedListener(this);

        options = getResources().getStringArray(R.array.add_meal_sp_category);
        choice = options[0];
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_add_meal, menu);
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

    public void createMeal(View view){
        TimePicker time = (TimePicker) findViewById(R.id.add_meal_tp_time);

        long mealId = dbHelper.createMeal(choice);
        long theTime = (time.getCurrentHour() * 60) + time.getCurrentMinute();
        dbHelper.createDayMeal(dayId, mealId, theTime);

        Toast.makeText(this, "Meal successfully created", Toast.LENGTH_SHORT).show();

        finish();
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        //  Choice "Other" must be the last item in the list
        if (choice.equals(options[options.length - 1])){

        }
        else{
            choice = parent.getItemAtPosition(position).toString();
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> parent) {

    }
}
