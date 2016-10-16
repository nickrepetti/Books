package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.database.Cursor;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.CursorAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.sql.Time;

public class MealsCursorAdapter extends CursorAdapter{

    private LayoutInflater inflater;

    public MealsCursorAdapter(Context context, Cursor c, int flags) {
        super(context, c, flags);
        inflater = LayoutInflater.from(context);
    }

    @Override
    public View newView(Context context, Cursor cursor, ViewGroup parent) {
        return inflater.inflate(R.layout.list_meal, parent, false);
    }

    @Override
    public void bindView(View view, Context context, Cursor cursor) {
        TextView category = (TextView) view.findViewById(R.id.meals_tv_category);
        TextView time = (TextView) view.findViewById(R.id.meals_tv_time);
        //Button addFood = (Button) view.findViewById(R.id.meals_btn_add_food);

        int columnIndex = cursor.getColumnIndex(DietManagerContract.Meal.KEY_CATEGORY);
        category.setText(cursor.getString(columnIndex));

        columnIndex = cursor.getColumnIndex(DietManagerContract.DayMeal.KEY_TIME);
        time.setText(HelperFunctions.getTime(cursor.getLong(columnIndex)));

        String searchIndex = DietManagerContract.DayMeal.KEY_MEAL_ID;
        columnIndex = cursor.getColumnIndex(searchIndex);
        String data = cursor.getString(columnIndex);
        //addFood.setOnClickListener(new AddItemListener(data));
    }
}
