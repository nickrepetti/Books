package com.nickrepetti.simpledietmanager;

import android.content.Context;
import android.database.Cursor;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.CursorAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

public class DietsCursorAdapter extends CursorAdapter{

    private LayoutInflater inflater;

    public DietsCursorAdapter(Context context, Cursor c, int flags) {
        super(context, c, flags);
        inflater = LayoutInflater.from(context);
    }

    @Override
    public View newView(Context context, Cursor cursor, ViewGroup parent) {
        return inflater.inflate(R.layout.list_item, parent, false);
    }

    @Override
    public void bindView(View view, Context context, Cursor cursor) {
        TextView dietName = (TextView) view.findViewById(R.id.diets_tv_diet_name);
        ImageView toggleActive = (ImageView) view.findViewById(R.id.diets_img_star);

        int columnIndex = cursor.getColumnIndex(DietManagerContract.Diet.KEY_DIET_NAME);
        String name = cursor.getString(columnIndex);
        dietName.setText(name);
        toggleActive.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(v.getContext(), "Diet was clicked", Toast.LENGTH_SHORT).show();

                //  TOGGLE DIET TO BE ACTIVE
                //  DEACTIVATE OTHER DIET
                //  v.setImageResource(R.drawable.ic_star_active);
            }
        });
    }
}
