package com.nickrepetti.simpledietmanager;

import android.content.Intent;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class AddDietActivity extends ActionBarActivity {

    private DietManagerDbAdapter dbHelper;
    private EditText dietName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_diet);

        dietName = (EditText) findViewById(R.id.add_diet_et_name);

        dbHelper = new DietManagerDbAdapter(this);
        dbHelper.open();

        dietName.setOnEditorActionListener(new TextView.OnEditorActionListener() {
            public boolean onEditorAction(TextView v, int actionId, KeyEvent event) {
                if ((event != null && (event.getKeyCode() == KeyEvent.KEYCODE_ENTER)) || (actionId == EditorInfo.IME_ACTION_DONE)) {
                    createDiet(v);
                }
                return false;
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_add_diet, menu);
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

    public void createDiet(View view){

 //  ERROR CHECK TO SEE IF "" WAS ENTERED
 //  CHECK IF DIET BY THAT NAME ALREADY EXISTS

        Intent intent = new Intent(this, DietsActivity.class);

        long dietId = dbHelper.createDiet(dietName.getText().toString(), 0);

        String[] dayList = {
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
        };

        for (int i = 0; i < dayList.length; i++) {
            dbHelper.createDay(dayList[i], "01-01-2000", dietId);
        }

        Toast.makeText(this, "Diet successfully created", Toast.LENGTH_SHORT).show();
        startActivity(intent);
    }
}