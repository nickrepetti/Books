package com.example.simplecalculator;

import java.util.Stack;

import android.widget.Button;
import android.widget.TextView;

public class Calculator {
	private String s;
	Stack<Double> numStack;
	Stack<Operator> opStack;
	private Operator op;
	private Boolean eqPressed;
	private Boolean opPressed;
	
	double num;
	
	public Calculator( ){
		s = "";
		numStack = new Stack<Double>( );
		opStack = new Stack<Operator>( );
		eqPressed = false;
		opPressed = false;
	}
	
	public void execute( Button btn, TextView disp ){
		/* Convert the button that was pressed into a string */
		String value = btn.getText( ).toString( );
		
		if ( ! isInteger( value ) ){
			if ( value.equals( "C" ) ){
				s = "";
				disp.setText( "0" );
				
				/* Empty the stacks */
				while ( ! numStack.isEmpty( ) )
					numStack.pop();
				while ( ! opStack.isEmpty( ) )
					opStack.pop();
				eqPressed = false;
				opPressed = false;
			}
			else if ( value.equals( "=" ) ){
				if ( eqPressed || s.equals( "" ) )
					return;
				double res = 0.0;
				
				num = Double.parseDouble( s );
				numStack.push( num );
				s = "";
				
				while ( ! opStack.isEmpty( ) ){
					res = calculate( );
					numStack.push( res );
				}
				disp.setText( String.valueOf( res ) );
				s = "";
				eqPressed = true;
			}	
			else if ( value.equals( "." ) ){
				if ( opPressed )
					return;
				if ( ! s.equals( "" ) )
					s = doDecimal( s, disp );
				else{
					if ( ! numStack.isEmpty( ) ){
						String t = String.valueOf( numStack.pop( ) );
						double tmp = Double.parseDouble( doDecimal( t, disp ) );
						numStack.push( tmp );
						disp.setText( String.valueOf( -tmp ) );
					}
				}
					
			}
			else {
				/* An Operator was pressed */
				if ( opPressed )
					return;
				opPressed = true;

				if ( ! eqPressed && ! s.equals( "" ) ){
					num = Double.parseDouble( s );
					numStack.push( num );
					s = "";
				}
				else
					eqPressed = false;	
				
				if ( value.equals( "+" ) )
					op = new Operator( Operator.OP_ADD, 2 );
				else if ( value.equals( "-" ) )
					op = new Operator( Operator.OP_SUB, 2 );
				else if ( value.equals( "*" ) )
					op = new Operator( Operator.OP_MUL, 3 );
				else if ( value.equals( "/" ) )
					op = new Operator( Operator.OP_DIV, 3 );
				else if ( value.equals( "x^y" ) )
					op = new Operator( Operator.OP_POW, 4 );
				else if ( value.equals( "+/-" ) ){
					opPressed = false;
					if ( ! numStack.empty( ) ){
						double tmp = numStack.pop( );
						numStack.push( -tmp );
						disp.setText( String.valueOf( -tmp ) );
					}
						
					return;
				}
				else if ( value.equals( "1/x" ) ){
					opPressed = false;
					if ( ! numStack.empty( ) ){
						double tmp = numStack.pop( );
						tmp = 1 / tmp;
						numStack.push( tmp );
						disp.setText( String.valueOf( tmp ) );
					}
						
					return;
				}
				else if ( value.equals( "sqrt" ) ){
					opPressed = false;
					if ( ! numStack.empty( ) ){
						double tmp = numStack.pop( );
						if ( tmp < 0 )
							return;
						tmp = Math.sqrt( tmp );
						numStack.push( tmp );
						disp.setText( String.valueOf( tmp ) );
					}
						
					return;
				}
				
				
				if ( ! opStack.isEmpty( ) && opStack.peek( ).getPriority( ) >= op.getPriority( ) ){
					double res = calculate( );
					numStack.push( calculate( ) );
					disp.setText( String.valueOf( res ) );
				}	

				s = "";
				opStack.push( op );
			}

		}
		else {
			if ( opPressed )
				opPressed = false;
			
			s += value;
			disp.setText( s );
		}
		
	}
	
	public boolean isInteger( String s ) {
		if ( s == null || s.length() == 0 )
			return false;
		if ( s.equals( "1/x" ) )
			return false;
		char c = s.charAt( 0 );
		if ( c <= '/' || c >= ':' )
			return false;
		
		return true;
	}
	
	public String doDecimal( String s, TextView disp ){
		if ( s == null || s.length( ) == 0 )
			return "";
		/* Check to see if there is already a decimal */
		for ( int i = 0; i < s.length( ); i++ )
			if ( s.charAt( i ) == '.' )
				return s;

		s += ".";
		disp.setText( s );
		return s;
	}
	
	public double calculate( ){
		double n2 = numStack.pop( );
		double n1 = numStack.pop( );
		Operator o1 = opStack.pop( );
			
		switch ( o1.getOpCode( ) ){
			case Operator.OP_ADD: return n1 + n2;
			case Operator.OP_SUB: return n1 - n2;
			case Operator.OP_MUL: return n1 * n2;
			case Operator.OP_DIV: return n1 / n2;
			case Operator.OP_POW: return Math.pow( n1, n2 );
		}
		
		return 0.0;
	}
}
