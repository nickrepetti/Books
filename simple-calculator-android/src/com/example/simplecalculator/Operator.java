package com.example.simplecalculator;

public class Operator {
	public static final int OP_ADD = 0;
	public static final int OP_SUB = 1;
	public static final int OP_MUL = 2;
	public static final int OP_DIV = 3;
	public static final int OP_POW = 4;
	
	private int opCode;
	private int priority;

	public int getPriority( ){
		return this.priority;
	}
	public int getOpCode( ){
		return this.opCode;
	}
	
	public Operator( int opCode, int priority ){
		this.opCode = opCode;
		this.priority = priority;
	}
}
