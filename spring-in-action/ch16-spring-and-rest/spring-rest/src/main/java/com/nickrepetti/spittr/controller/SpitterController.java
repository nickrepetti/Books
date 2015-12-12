package com.nickrepetti.spittr.controller;

import com.nickrepetti.spittr.dao.SpitterRepository;
import com.nickrepetti.spittr.model.Spitter;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/spitter")
public class SpitterController {
		
	private SpitterRepository spitterRepository;
	
	@Autowired
	public SpitterController(SpitterRepository spitterRepository) {
		this.spitterRepository = spitterRepository;
	}
	
	@RequestMapping(method = { RequestMethod.GET, RequestMethod.POST })
	public List<Spitter> getSpitterList() {
		return spitterRepository.findSpitters();
	}
	
	@RequestMapping(value="/create", method=RequestMethod.POST, 
		consumes = "application/json")
	public Spitter save(@RequestBody Spitter spitter) {
		
		return spitterRepository.save(spitter);
	}
	
	@RequestMapping(value="/{username}", method=RequestMethod.GET)
	public Spitter showSpitterProfile(
		@PathVariable("username") String username) {
		
		return spitterRepository.findByUsername(username);
	}
}
