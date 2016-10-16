package com.nickrepetti.spittr.dao.jdbc;

import com.nickrepetti.spittr.dao.SpitterRepository;
import com.nickrepetti.spittr.model.Spitter;

import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

public class JdbcSpitterRepository implements SpitterRepository {

	private JdbcTemplate jdbcTemplate;

	public JdbcSpitterRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@Override
	public Spitter save(Spitter spitter) {
		
		jdbcTemplate.update("INSERT INTO spitter "
			+ "(firstName, lastName, username, password) VALUES (?, ?, ?, ?)",
			spitter.getFirstName(), spitter.getLastName(),
			spitter.getUsername(), spitter.getPassword());
		
		return spitter;
	}
	
	@Override
	public Spitter findByUsername(String username) {
		return jdbcTemplate.queryForObject(
			"SELECT * FROM spitter WHERE username=?", 
			new SpitterRowMapper(),
			username);
	}	
	
	@Override
	public List<Spitter> findSpitters() {
		return jdbcTemplate.query(
			"SELECT * FROM spitter s", 
			new SpitterRowMapper());
	}

	private static final class SpitterRowMapper implements RowMapper<Spitter> {
		
		public Spitter mapRow(ResultSet rs, int rowNum) throws SQLException {
			long id = rs.getLong("id");
			String firstName = rs.getString("firstName");
			String lastName = rs.getString("lastName");
			String username = rs.getString("username");
			String password = null;
			
			return new Spitter(id, firstName, lastName, username, password);
		}		
	}
}
