/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package calc;

import java.awt.Button;
/**
 *
 * @author repettin
 */
public class ButtonNum extends Button {
    public static void test(String s, String n, javax.swing.JTextField t){
        s += n;
        
        //  IF s goes over size limit, do stuff
        t.setText(s);
    }
}
