package com.nickrepetti.simpledietmanager;

import android.provider.BaseColumns;

public class DietManagerContract {

    public static final String DATABASE_NAME = "dietManager.db";
    public static final int DATABASE_VERSION = 1;

    public static final String[] SQL_CREATE_TABLE_ARRAY = {
            User.CREATE_TABLE,
            Address.CREATE_TABLE,
            Diet.CREATE_TABLE,
            Day.CREATE_TABLE,
            Meal.CREATE_TABLE,
            DayMeal.CREATE_TABLE,
            Item.CREATE_TABLE,
            MealItem.CREATE_TABLE,
            NutritionFacts.CREATE_TABLE
    };

    public static final String[] SQL_DELETE_TABLE_ARRAY = {
            User.DELETE_TABLE,
            Address.DELETE_TABLE,
            Diet.DELETE_TABLE,
            Day.DELETE_TABLE,
            Meal.DELETE_TABLE,
            DayMeal.DELETE_TABLE,
            Item.DELETE_TABLE,
            MealItem.DELETE_TABLE,
            NutritionFacts.DELETE_TABLE
    };

    private DietManagerContract(){}

    public static final class User implements BaseColumns{

        private User(){}

        public static final String TABLE_NAME = "user";

        public static final String KEY_USER_NAME = "username";
        public static final String KEY_PASSWORD = "password";
        public static final String KEY_EMAIL = "email";
        public static final String KEY_PHONE_NUMBER = "phonenumber";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_USER_NAME + " TEXT, "
                + KEY_PASSWORD + " TEXT, "
                + KEY_EMAIL + " TEXT, "
                + KEY_PHONE_NUMBER + " TEXT"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_USER_NAME,
                KEY_PASSWORD,
                KEY_EMAIL,
                KEY_PHONE_NUMBER
        };
    }

    public static final class Address implements BaseColumns{

        private Address(){}

        public static final String TABLE_NAME = "address";

        public static final String KEY_ADDRESS = "address";
        public static final String KEY_ZIP_CODE = "zipcode";
        public static final String KEY_STATE = "state";
        public static final String KEY_USER_ID = "userid";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_ADDRESS + " TEXT, "
                + KEY_ZIP_CODE + " INTEGER, "
                + KEY_STATE + " TEXT, "
                + KEY_USER_ID + " INTEGER UNIQUE, "
                + "FOREIGN KEY (" + KEY_USER_ID + ") REFERENCES "
                + User.TABLE_NAME + " (" + User._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_ADDRESS,
                KEY_ZIP_CODE,
                KEY_STATE,
                KEY_USER_ID
        };
    }

    public static final class Diet implements BaseColumns{

        private Diet(){}

        public static final String TABLE_NAME = "diet";

        public static final String KEY_DIET_NAME = "dietname";
        public static final String KEY_USER_ID = "userid";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_DIET_NAME + " TEXT, "
                + KEY_USER_ID + " INTEGER, "
                + "FOREIGN KEY (" + KEY_USER_ID + ") REFERENCES "
                + User.TABLE_NAME + " (" + User._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_DIET_NAME,
                KEY_USER_ID
        };
    }

    public static final class Day implements BaseColumns{

        private Day(){}

        public static final String TABLE_NAME = "day";

        public static final String KEY_DAY_NAME = "dayname";
        public static final String KEY_DATE = "date";
        public static final String KEY_DIET_ID = "dietid";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_DAY_NAME + " TEXT, "
                + KEY_DATE + " TEXT, "
                + KEY_DIET_ID + " INTEGER, "
                + "FOREIGN KEY (" + KEY_DIET_ID + ") REFERENCES "
                + Diet.TABLE_NAME + " (" + Diet._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_DAY_NAME,
                KEY_DATE,
                KEY_DIET_ID
        };
    }

    public static final class Meal implements BaseColumns{

        private Meal(){}

        public static final String TABLE_NAME = "meal";

        public static final String KEY_CATEGORY = "mealname";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_CATEGORY + " TEXT"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_CATEGORY
        };
    }

    public static final class DayMeal implements BaseColumns{

        private DayMeal(){}

        public static final String TABLE_NAME = "daymeal";

        public static final String KEY_DAY_ID = "dayid";
        public static final String KEY_MEAL_ID = "mealid";
        public static final String KEY_TIME = "time";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + KEY_DAY_ID + " INTEGER, "
                + KEY_MEAL_ID + " INTEGER, "
                + KEY_TIME + " INTEGER, "
                + "CONSTRAINT PK_" + TABLE_NAME + " PRIMARY KEY ("
                + KEY_DAY_ID + ", " + KEY_MEAL_ID + "), "
                + "FOREIGN KEY (" + KEY_DAY_ID +") REFERENCES "
                + Day.TABLE_NAME + " (" + Day._ID + "), "
                + "FOREIGN KEY (" + KEY_MEAL_ID +") REFERENCES "
                + Meal.TABLE_NAME + " (" + Meal._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_DAY_ID,
                KEY_MEAL_ID,
                KEY_TIME
        };
    }

    public static final class Item implements BaseColumns{

        private Item(){}

        public static final String TABLE_NAME = "item";

        public static final String KEY_ITEM_NAME = "itemname";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_ITEM_NAME + " TEXT"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_ITEM_NAME
        };
    }

    public static final class MealItem implements BaseColumns{

        private MealItem(){}

        public static final String TABLE_NAME = "mealitem";

        public static final String KEY_MEAL_ID = "mealid";
        public static final String KEY_ITEM_ID = "itemid";
        public static final String KEY_QUANTITY = "quantity";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + KEY_MEAL_ID + " INTEGER, "
                + KEY_ITEM_ID + " INTEGER, "
                + KEY_QUANTITY + " INTEGER, "
                + "CONSTRAINT PK_" + TABLE_NAME + " PRIMARY KEY ("
                + KEY_MEAL_ID + ", " + KEY_ITEM_ID + "), "
                + "FOREIGN KEY (" + KEY_MEAL_ID +") REFERENCES "
                + Meal.TABLE_NAME + " (" + Meal._ID + "), "
                + "FOREIGN KEY (" + KEY_ITEM_ID +") REFERENCES "
                + Item.TABLE_NAME + " (" + Item._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_MEAL_ID,
                KEY_ITEM_ID,
                KEY_QUANTITY
        };
    }

    public static final class NutritionFacts implements BaseColumns{

        private NutritionFacts(){}

        public static final String TABLE_NAME = "nutritionfacts";

        public static final String KEY_CALORIES = "calories";
        public static final String KEY_FAT_CALORIES = "fatcalories";
        public static final String KEY_FAT = "fat";
        public static final String KEY_SATURATED_FAT = "saturatedfat";
        public static final String KEY_CHOLESTEROL = "cholersterol";
        public static final String KEY_SODIUM = "sodium";
        public static final String KEY_CARBS = "carbs";
        public static final String KEY_FIBER = "fiber";
        public static final String KEY_SUGARS = "sugars";
        public static final String KEY_PROTEIN = "protein";
        public static final String KEY_PRICE = "price";
        public static final String KEY_ITEM_ID = "itemid";

        public static final String CREATE_TABLE = "CREATE TABLE " + TABLE_NAME + " ("
                + _ID + " INTEGER PRIMARY KEY, "
                + KEY_CALORIES + " INTEGER, "
                + KEY_FAT_CALORIES + " REAL, "
                + KEY_FAT + " REAL, "
                + KEY_SATURATED_FAT + " REAL, "
                + KEY_CHOLESTEROL + " REAL, "
                + KEY_SODIUM + " INTEGER, "
                + KEY_CARBS + " REAL, "
                + KEY_FIBER + " REAL, "
                + KEY_SUGARS + " REAL, "
                + KEY_PROTEIN + " REAL, "
                + KEY_PRICE + " REAL, "
                + KEY_ITEM_ID + " INTEGER UNIQUE, "
                + "FOREIGN KEY (" + KEY_ITEM_ID + ") REFERENCES "
                + Item.TABLE_NAME + " (" + Item._ID + ")"
                + ");";

        public static final String DELETE_TABLE = "DROP TABLE IF EXISTS " + TABLE_NAME;

        public static final String[] KEY_ARRAY = {
                KEY_CALORIES,
                KEY_FAT_CALORIES,
                KEY_FAT,
                KEY_SATURATED_FAT,
                KEY_CHOLESTEROL,
                KEY_SODIUM,
                KEY_CARBS,
                KEY_FIBER,
                KEY_SUGARS,
                KEY_PROTEIN,
                KEY_PRICE,
                KEY_ITEM_ID
        };
    }
}