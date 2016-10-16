package com.nickrepetti.simpledietmanager;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class DietManagerDbAdapter {
    private static final String TAG = "CountriesDbAdapter";

    private Context context;
    private DatabaseHelper dbHelper;
    private SQLiteDatabase db;

    public DietManagerDbAdapter(Context context){
        this.context = context;
    }

    public DietManagerDbAdapter open() throws SQLException {
        dbHelper = new DatabaseHelper(context);
        db = dbHelper.getWritableDatabase();
        return this;
    }

    public void close() {
        if (dbHelper != null) {
            dbHelper.close();
        }
    }

    public void deleteDatabase() {
        db.close();
        context.deleteDatabase(DietManagerContract.DATABASE_NAME);
    }

    /*
    TABLE DIET METHODS
     */
    public long createDiet(String dietName, long userId) {
        ContentValues values = new ContentValues();

        values.put(DietManagerContract.Diet.KEY_DIET_NAME, dietName);
        values.put(DietManagerContract.Diet.KEY_USER_ID, userId);

        return db.insert(DietManagerContract.Diet.TABLE_NAME, null, values);
    }

    public Cursor getAllDiets() {
        Cursor cursor = db.query(
                DietManagerContract.Diet.TABLE_NAME,
                null,
                null,
                null,
                null,
                null,
                null
        );

        if (cursor != null) {
            cursor.moveToFirst();
        }

        return cursor;
    }

    public Diet getDiet(String dietID){
        Cursor cursor = db.query(
                DietManagerContract.Diet.TABLE_NAME,
                new String[] {DietManagerContract.Diet.KEY_DIET_NAME},
                DietManagerContract.Diet._ID + " = ? ",
                new String[] {dietID},
                null,
                null,
                null
        );

        String dietName = "MyDiet";

        if (cursor.moveToFirst()){
            int columnIndex = cursor.getColumnIndex(DietManagerContract.Diet.KEY_DIET_NAME);
            dietName = cursor.getString(columnIndex);
        }

        cursor.close();

        return new Diet(dietName);
    }

    public Diet getDiet(long dietID){
        return getDiet(String.valueOf(dietID));
    }

    /*
    TABLE DAY METHODS
     */
    public long createDay(String dayName, String date, long dietId) {
        ContentValues values = new ContentValues();

        values.put(DietManagerContract.Day.KEY_DAY_NAME, dayName);
        values.put(DietManagerContract.Day.KEY_DATE, date);
        values.put(DietManagerContract.Day.KEY_DIET_ID, dietId);

        return db.insert(DietManagerContract.Day.TABLE_NAME, null, values);
    }

    public ArrayList<Day> getDayList(String dietID){
        String[] columns = new String[]{
                DietManagerContract.Day._ID,
                DietManagerContract.Day.KEY_DAY_NAME,
                DietManagerContract.Day.KEY_DATE
        };

        Cursor cursor = db.query(
                DietManagerContract.Day.TABLE_NAME,
                columns,
                DietManagerContract.Day.KEY_DIET_ID + " = ? ",
                new String[] {dietID},
                null,
                null,
                null
        );

        ArrayList<Day> dayList = new ArrayList<Day>();

        if (cursor.moveToFirst()){
            int columnIndex;
            long id;
            String dayName;
            String date;

            while (!cursor.isAfterLast()) {
                columnIndex = cursor.getColumnIndex(DietManagerContract.Day._ID);
                id = cursor.getLong(columnIndex);
                columnIndex = cursor.getColumnIndex(DietManagerContract.Day.KEY_DAY_NAME);
                dayName = cursor.getString(columnIndex);
                columnIndex = cursor.getColumnIndex(DietManagerContract.Day.KEY_DATE);
                date = cursor.getString(columnIndex);

                dayList.add(new Day(id, dayName, date));

                cursor.moveToNext();
            }
        }
        else{
            dayList.add(new Day(-1, "My Day", "01-01-2000"));
        }

        cursor.close();

        return dayList;
    }

    public ArrayList<Day> getDayList(long dietID){
        return getDayList(String.valueOf(dietID));
    }

    /*
    TABLE MEAL METHODS
     */
    public long createMeal(String category) {
        ContentValues values = new ContentValues();

        values.put(DietManagerContract.Meal.KEY_CATEGORY, category);

        return db.insert(DietManagerContract.Meal.TABLE_NAME, null, values);
    }

    /*
    TABLE DAY_MEAL METHODS
     */
    public long createDayMeal(long dayId, long mealId, long time) {
        ContentValues values = new ContentValues();

        values.put(DietManagerContract.DayMeal.KEY_DAY_ID, dayId);
        values.put(DietManagerContract.DayMeal.KEY_MEAL_ID, mealId);
        values.put(DietManagerContract.DayMeal.KEY_TIME, time);

        return db.insert(DietManagerContract.DayMeal.TABLE_NAME, null, values);
    }

    public Cursor getMealList(String dayId) {
        String query = "SELECT * FROM " + DietManagerContract.DayMeal.TABLE_NAME
                + " JOIN " + DietManagerContract.Meal.TABLE_NAME + " ON "
                + DietManagerContract.Meal.TABLE_NAME + "." + DietManagerContract.Meal._ID + " = "
                + DietManagerContract.DayMeal.TABLE_NAME + "." + DietManagerContract.DayMeal.KEY_MEAL_ID
                + " JOIN " + DietManagerContract.Day.TABLE_NAME + " ON "
                + DietManagerContract.Day.TABLE_NAME + "." + DietManagerContract.Day._ID + " = "
                + DietManagerContract.DayMeal.TABLE_NAME + "." + DietManagerContract.DayMeal.KEY_DAY_ID
                + " WHERE " + DietManagerContract.DayMeal.KEY_DAY_ID + " = ?"
                + " ORDER BY " + DietManagerContract.DayMeal.KEY_TIME + ";";

        Cursor cursor = db.rawQuery(query, new String[]{dayId});

        if (cursor != null) {
            cursor.moveToFirst();
        }

        return cursor;
    }

    public Cursor getMealList(long dayId){
        return getMealList(String.valueOf(dayId));
    }

    private static class DatabaseHelper extends SQLiteOpenHelper {
        DatabaseHelper(Context context) {
            super(context, DietManagerContract.DATABASE_NAME, null, DietManagerContract.DATABASE_VERSION);
        }

        @Override
        public void onCreate(SQLiteDatabase db) {
            Log.w(TAG, "Creating database " + DietManagerContract.DATABASE_NAME);

            for (int i = 0; i < DietManagerContract.SQL_CREATE_TABLE_ARRAY.length; i++) {
                db.execSQL(DietManagerContract.SQL_CREATE_TABLE_ARRAY[i]);
            }
        }

        @Override
        public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
            Log.w(TAG, "Upgrading database " + DietManagerContract.DATABASE_NAME
                    + " from version " + oldVersion + " to version " + newVersion);

            for (int i = 0; i < DietManagerContract.SQL_DELETE_TABLE_ARRAY.length; i++) {
                db.execSQL(DietManagerContract.SQL_DELETE_TABLE_ARRAY[i]);
            }

            onCreate(db);
        }
    }
}
