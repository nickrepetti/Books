package com.nickrepetti.spittr.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import java.util.Date;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

@JsonInclude(Include.NON_EMPTY)
public class Spittle {
	
	private Long id;
	private String message;
	private Date time;
	private Spitter spitter;
	
	public Spittle() {}
	
	public Spittle(Long id, String message, Date time, Spitter spitter) {
		this.id = id;
		this.message = message;
		this.time = time;
		this.spitter = spitter;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public Date getTime() {
		return time;
	}
	
	public void setTime(Date time) {
		this.time = time;
	}
	
	public Spitter getSpitter() {
		return spitter;
	}
	
	public void setSpitter(Spitter spitter) {
		this.spitter = spitter;
	}
	
	@Override
	public boolean equals(Object that) {
		return EqualsBuilder.reflectionEquals(this, that, "id", "time");
	}
	
	@Override
	public int hashCode() {
		return HashCodeBuilder.reflectionHashCode(this, "id", "time");
	}
}
