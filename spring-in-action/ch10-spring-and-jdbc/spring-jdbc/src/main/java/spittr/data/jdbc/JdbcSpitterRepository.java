package spittr.data.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import spittr.data.SpitterRepository;
import spittr.Spitter;

public class JdbcSpitterRepository implements SpitterRepository {

	private JdbcTemplate jdbcTemplate;

	public JdbcSpitterRepository(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;		
	}

	@Override
	public Spitter save(Spitter spitter) {
		return null;
	}
	
	@Override
	public Spitter findByUsername(String username) {
		return null;
	}
	
	private static final class SpitterRowMapper implements RowMapper<Spitter> {
		
		public Spitter mapRow(ResultSet rs, int rowNum) throws SQLException {
			long id = rs.getLong("id");
			String firstName = rs.getString("firstName");
			String lastName = rs.getString("lastName");
			String username = rs.getString("username");
			String password = rs.getString("password");
			
			return new Spitter(id, firstName, lastName, username, password);
		}		
	}
}
