package com.nickrepetti.spittr.dao;

import com.nickrepetti.spittr.model.Spittle;
import com.nickrepetti.spittr.util.SpittleNotFoundException;

import java.util.List;

public interface SpittleRepository {
	
	public Spittle findOne(long spittleId) throws SpittleNotFoundException;
	
	public List<Spittle> findSpittles(long max, int count);
	
	public Spittle save(Spittle spittle);
}
