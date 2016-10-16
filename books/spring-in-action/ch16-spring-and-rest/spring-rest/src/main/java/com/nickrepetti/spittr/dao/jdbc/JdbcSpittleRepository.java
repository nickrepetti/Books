package com.nickrepetti.spittr.dao.jdbc;

import com.nickrepetti.spittr.dao.SpittleRepository;
import com.nickrepetti.spittr.model.Spitter;
import com.nickrepetti.spittr.model.Spittle;
import com.nickrepetti.spittr.util.SpittleNotFoundException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.Date;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.DataIntegrityViolationException;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;


import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

public class JdbcSpittleRepository implements SpittleRepository {

	private final String SAVE = 
		"INSERT INTO spittle (message, postedTime, spitterId) "
		+ "VALUES (?, CURRENT_TIMESTAMP(), ?)";
								  
	private final String SELECT_BY_ID = 
		"SELECT s.id, s.message, s.postedTime, s.spitterId, "
		+ "sp.firstName, sp.lastName, sp.username "
		+ "FROM spittle s "
		+ "INNER JOIN spitter sp "
		+ "ON s.spitterId = sp.id "
		+ "WHERE s.id = ? ";
			
	private final String SELECT_ALL_RESTRICT = 
		"SELECT s.id, s.message, s.postedTime, s.spitterId, "
		+ "sp.firstName, sp.lastName, sp.username "
		+ "FROM spittle s "
		+ "INNER JOIN spitter sp "
		+ "ON s.spitterId = sp.id "
		+ "WHERE s.id < ? "
		+ "ORDER BY s.postedTime DESC LIMIT ?";
	
	private JdbcTemplate jdbcTemplate;

	public JdbcSpittleRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;		
	}

	@Override
	public Spittle findOne(long spittleId) throws SpittleNotFoundException {
		try {
			return jdbcTemplate.queryForObject(
				SELECT_BY_ID, 
				new SpittleRowMapper(), 
				spittleId);
		} 
		catch (EmptyResultDataAccessException e) {
			throw new SpittleNotFoundException();
		}
	}
	
	@Override
	public List<Spittle> findSpittles(long max, int count) {
		return jdbcTemplate.query(
			SELECT_ALL_RESTRICT,
			new SpittleRowMapper(), 
			max, 
			count);
	}
	
	@Override
	public Spittle save(Spittle spittle) {
		KeyHolder keyHolder = new GeneratedKeyHolder();
		
		final String message = spittle.getMessage();
		final Long spitterId;
		
		// MOVE LOGIC ELSEWHERE
		Spitter spitter = spittle.getSpitter();
		
		boolean hasSpitter = (spitter != null);
		boolean hasSpitterId = false;
		
		if (hasSpitter) {
			hasSpitterId = (spitter.getId() != null);
		}
		
		spitterId = hasSpitterId ? spitter.getId() : new Long(1);
	
		jdbcTemplate.update(
			new PreparedStatementCreator() {
				
				@Override
				public PreparedStatement 
					createPreparedStatement(Connection connection) 
						throws SQLException {
					
					PreparedStatement ps = connection.prepareStatement(
						SAVE,
						Statement.RETURN_GENERATED_KEYS);
						
					ps.setString(1, message);
					ps.setLong(2, spitterId);
					
					return ps;
				}
			}, keyHolder);

		long savedSpittleId = keyHolder.getKey().longValue();		
		
		return findOne(savedSpittleId);
	}

	private static final class SpittleRowMapper implements RowMapper<Spittle> {
		
		public Spittle mapRow(ResultSet rs, int rowNum) throws SQLException {
			long id = rs.getLong("id");
			String message = rs.getString("message");
			Date postedTime = rs.getTimestamp("postedTime");
			
			long spitterId = rs.getLong("spitterId");
			String firstName = rs.getString("firstName");
			String lastName = rs.getString("lastName");
			String username = rs.getString("username");
			String password = null;
			
			Spitter spitter = new Spitter(spitterId, firstName, lastName, username, password);
			
			return new Spittle(id, message, postedTime, spitter);
		}
	}
}
