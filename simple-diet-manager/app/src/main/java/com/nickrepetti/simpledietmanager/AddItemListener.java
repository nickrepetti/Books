package com.nickrepetti.simpledietmanager;


import android.content.Context;
import android.content.Intent;
import android.view.View;

public class AddItemListener implements View.OnClickListener{

    String mealId;

    public AddItemListener(String mealId){
        this.mealId = mealId;
    }

    @Override
    public void onClick(View view) {
        Context context = view.getContext();
        Intent intent = new Intent(context, AddItemActivity.class);

        intent.putExtra("mealId", mealId);

        context.startActivity(intent);
    }
}
