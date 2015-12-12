package com.nickrepetti.spittr.controller;

import com.nickrepetti.spittr.dao.SpittleRepository;
import com.nickrepetti.spittr.model.Spittle;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/spittle")
public class SpittleController {
	
	private static final String MAX_LONG_AS_STRING = "9223372036854775807";
	
	private SpittleRepository spittleRepository;
	
	@Autowired
	public SpittleController(SpittleRepository spittleRepository) {
		this.spittleRepository = spittleRepository;
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public List<Spittle> spittles(
		@RequestParam(value="max", defaultValue=MAX_LONG_AS_STRING) long max, 
		@RequestParam(value="count", defaultValue="20") int count) {
		
		return spittleRepository.findSpittles(max, count);
	}
	
	@RequestMapping(value="/{spittleId}", method=RequestMethod.GET)
	public Spittle getById(
		@PathVariable("spittleId") long spittleId) {
		
		return spittleRepository.findOne(spittleId);
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes="application/json")
	public Spittle save(@RequestBody Spittle spittle) {
		return spittleRepository.save(spittle);
	}
}
