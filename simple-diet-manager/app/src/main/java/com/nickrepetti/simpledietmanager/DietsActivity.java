package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
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
import android.widget.Toast;

public class DietsActivity extends ActionBarActivity {

    private DietManagerDbAdapter dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_diets);

        dbHelper = new DietManagerDbAdapter(this);
        dbHelper.open();

        generateLayout();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_diets, menu);
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

    public void addDiet(View view){
        Intent intent = new Intent(this, AddDietActivity.class);
        startActivity(intent);
    }

    private void generateLayout(){
//        Cursor cursor = dbHelper.getAllDiets(getUserId());
        Cursor cursor = dbHelper.getAllDiets();
        LayoutInflater inflater = getLayoutInflater();

        if (cursor.getCount() > 0){
            DietsCursorAdapter dietsCursorAdapter = new DietsCursorAdapter(this, cursor, 0);

            ListView listView = (ListView) findViewById(R.id.diets_lv_diet_list);
            ViewGroup header = (ViewGroup) inflater.inflate(R.layout.add_diet, listView, false);
            ViewGroup footer = (ViewGroup) inflater.inflate(R.layout.delete_diets, listView, false);

            listView.addHeaderView(header, null, false);
            listView.addFooterView(footer, null, false);
            listView.setAdapter(dietsCursorAdapter);

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> listView, View view, int position, long id) {
                    Context context = view.getContext();
                    TextView dietName = (TextView) view.findViewById(R.id.diets_tv_diet_name);

                    Intent intent = new Intent(context, ViewDietActivity.class);
                    intent.putExtra("dietId", id);
                    intent.putExtra("dietName", dietName.getText().toString());

                    context.startActivity(intent);
                }
            });
        }
        else{
            LinearLayout layout = (LinearLayout) findViewById(R.id.diets_layout);
            View noDiets = inflater.inflate(R.layout.no_diets, layout, false);
            layout.addView(noDiets);
        }
    }

    public void deleteDatabase(View view){
        dbHelper.deleteDatabase();
        Toast.makeText(this, "Database deleted successfully", Toast.LENGTH_SHORT).show();
        finish();
        startActivity(getIntent());
    }

    public void openShoppingList(View view){
        Intent intent = new Intent(this, ShoppingListActivity.class);

        startActivity(intent);
    }
}
