package com.nickrepetti.spittr.dao;

import com.nickrepetti.spittr.model.Spitter;

import java.util.List;

public interface SpitterRepository {
	
	public Spitter save(Spitter spitter);
	
	public Spitter findByUsername(String username);
	
	public List<Spitter> findSpitters();
}
