package com.nickrepetti.simpledietmanager;

import android.app.Activity;
import android.app.Dialog;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;

public class DietDayFragment extends Fragment {

    private static String TAG = "myfragment";

    private DietManagerDbAdapter dbHelper;
    private Context context;
    private long dayId;
    private Dialog dialog;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_diet_day, container, false);
        context = rootView.getContext();

        dbHelper = new DietManagerDbAdapter(getActivity());
        dbHelper.open();

        Bundle args = getArguments();
        dayId = args.getLong("dayId");

        dialog = new Dialog(context,android.R.style.Theme_Translucent_NoTitleBar);

        Cursor cursor = dbHelper.getMealList(dayId);

        if (cursor.getCount() > 0){
            MealsCursorAdapter mealsCursorAdapter = new MealsCursorAdapter(context, cursor, 0);

            ListView listView = (ListView) rootView.findViewById(R.id.meals_lv_meal_list);
            ViewGroup header = (ViewGroup) inflater.inflate(R.layout.add_meal, listView, false);

            listView.addHeaderView(header, null, false);
            listView.setAdapter(mealsCursorAdapter);

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> listView, View view, int position, long id) {
                    Context context = view.getContext();
                    Intent intent = new Intent(context, NutritionFactsActivity.class);

                    intent.putExtra("mealId", "mealIdHere");

                    context.startActivity(intent);
                }
            });
        }
        else{
            LinearLayout layout = (LinearLayout) rootView.findViewById(R.id.meals_layout);
            View noDiets = inflater.inflate(R.layout.no_meals, layout, false);
            layout.addView(noDiets);
        }

        Button btn = (Button) rootView.findViewById(R.id.meals_btn_add);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(context, AddMealActivity.class);
                intent.putExtra("MealDayId", dayId);
                startActivity(intent);
            }
        });


        Log.d(TAG, "onCreateView()");

        return rootView;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Log.d(TAG, "onCreate()");
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        Log.d(TAG, "onActivityCreated()");
    }

    @Override
    public void onStart() {
        super.onStart();

        Log.d(TAG, "onStart()");
    }

    @Override
    public void onResume() {
        super.onResume();

        Log.d(TAG, "onResume()");
    }

    @Override
    public void onPause() {
        super.onPause();

        Log.d(TAG, "onPause()");
    }

    @Override
    public void onStop() {
        super.onStop();

        Log.d(TAG, "onStop()");
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();

        Log.d(TAG, "onDestroyView()");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();


    }
}
