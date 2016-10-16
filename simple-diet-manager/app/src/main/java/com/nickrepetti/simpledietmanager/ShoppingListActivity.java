package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.graphics.Paint;
import android.support.v7.app.ActionBarActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

public class ShoppingListActivity extends ActionBarActivity {

    private DietManagerDbAdapter dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shopping_list);

        dbHelper = new DietManagerDbAdapter(this);
        dbHelper.open();
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_shopping_list, menu);
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
    protected void onResume() {
        super.onResume();

        generateLayout();
    }

    private void generateLayout(){
//        Cursor cursor = dbHelper.getShoppingList(getUserId());
        Cursor cursor = dbHelper.getAllDiets();
        LayoutInflater inflater = getLayoutInflater();

        if (cursor.getCount() > 0){
            ShoppingListCursorAdapter shoppingListCursorAdapter = new ShoppingListCursorAdapter(this, cursor, 0);

            ListView listView = (ListView) findViewById(R.id.shopping_list_lv);
            listView.setAdapter(shoppingListCursorAdapter);

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> listView, View view, int position, long id) {
                    TextView textView = (TextView) view.findViewById(R.id.shopping_list_tv_name);
                    textView.setPaintFlags(textView.getPaintFlags() | Paint.STRIKE_THRU_TEXT_FLAG);
                }
            });
        }
        else{
            LinearLayout layout = (LinearLayout) findViewById(R.id.diets_layout);
            View noDiets = inflater.inflate(R.layout.no_diets, layout, false);
            layout.addView(noDiets);
        }
    }
}
