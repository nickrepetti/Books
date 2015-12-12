package spittr.data.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.dao.EmptyResultDataAccessException;

import spittr.data.SpittleRepository;
import spittr.Spittle;
import spittr.Spitter;

public class JdbcSpittleRepository implements SpittleRepository {

	private JdbcTemplate jdbcTemplate;

	public JdbcSpittleRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;		
	}

	@Override
	public Spittle findOne(long spittleId) {
		try {
			return jdbcTemplate.queryForObject(
				"SELECT s.id, s.message, s.postedTime, s.spitterId, "
				+ "sp.firstName, sp.lastName, sp.username, sp.password "
				+ "FROM spittle s "
				+ "INNER JOIN spitter sp "
				+ "ON s.spitterId = sp.id "
				+ "WHERE s.id = ? ",
				new SpittleRowMapper(), spittleId);
		}
		catch (EmptyResultDataAccessException e) {
			return null;
		}
	}
	
	@Override
	public List<Spittle> findSpittles(long max, int count) {
		try {
			return jdbcTemplate.query(
				"SELECT s.id, s.message, s.postedTime, s.spitterId, "
				+ "sp.firstName, sp.lastName, sp.username, sp.password "
				+ "FROM spittle s "
				+ "INNER JOIN spitter sp "
				+ "ON s.spitterId = sp.id "
				+ "WHERE s.id < ? "
				+ "ORDER BY s.postedTime DESC LIMIT ?",
				new SpittleRowMapper(), max, count);
		}
		catch (EmptyResultDataAccessException e) {
			return new ArrayList<Spittle>();
		}
	}
	
	@Override
	public Spittle save(Spittle spittle) {
		return null;
	}

/*
  public Spittle save(Spittle spittle) {
    jdbc.update(
        "insert into Spittle (message, created_at, latitude, longitude)" +
        " values (?, ?, ?, ?)",
        spittle.getMessage(),
        spittle.getTime(),
        spittle.getLatitude(),
        spittle.getLongitude());
		
		return spittle;
  }*/
  
	
	private static final class SpittleRowMapper implements RowMapper<Spittle> {
		
		public Spittle mapRow(ResultSet rs, int rowNum) throws SQLException {
			long id = rs.getLong("id");
			String message = rs.getString("message");
			Date postedTime = rs.getTimestamp("postedTime");
			
			long spitterId = rs.getLong("spitterId");
			String firstName = rs.getString("firstName");
			String lastName = rs.getString("lastName");
			String username = rs.getString("username");
			String password = rs.getString("password");
			
			Spitter spitter = new Spitter(spitterId, firstName, lastName, username, password);
			
			return new Spittle(id, message, postedTime, spitter);
		}
	}
}
