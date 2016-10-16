package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.database.Cursor;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CursorAdapter;
import android.widget.TextView;

public class ShoppingListCursorAdapter extends CursorAdapter{

    private LayoutInflater inflater;

    public ShoppingListCursorAdapter(Context context, Cursor c, int flags) {
        super(context, c, flags);
        inflater = LayoutInflater.from(context);
    }

    @Override
    public View newView(Context context, Cursor cursor, ViewGroup parent) {
        return inflater.inflate(R.layout.list_shopping, parent, false);
    }

    @Override
    public void bindView(View view, Context context, Cursor cursor) {
        //  KEEP TRACK OF WHETHER OR NOT AN ITEM HAS BEEN CHECKED OFF

        TextView itemName = (TextView) view.findViewById(R.id.shopping_list_tv_name);

        itemName.setText("Testing");
    }
}
