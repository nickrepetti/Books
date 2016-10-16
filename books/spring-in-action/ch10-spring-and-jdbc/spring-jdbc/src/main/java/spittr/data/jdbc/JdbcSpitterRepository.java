package spittr.data.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.dao.EmptyResultDataAccessException;

import spittr.data.SpitterRepository;
import spittr.Spitter;

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
		try {
			return jdbcTemplate.queryForObject(
				"SELECT * FROM spitter WHERE username=?", 
				new SpitterRowMapper(),
				username);
		}
		catch (EmptyResultDataAccessException e) {
			return null;
		}
	}	

	private static final class SpitterRowMapper implements RowMapper<Spitter> {
		
		public Spitter mapRow(ResultSet rs, int rowNum) throws SQLException {
			long id = rs.getLong("id");
			String firstName = rs.getString("firstName");
			String lastName = rs.getString("lastName");
			String username = rs.getString("username");
			String password = null; // No need to bring password
			
			return new Spitter(id, firstName, lastName, username, password);
		}		
	}
}
