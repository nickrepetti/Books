package spittr.data.jdbc;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

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
		return null;
	}
	
	@Override
	public List<Spittle> findSpittles(long max, int count) {
		return null;
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
			String password = rs.getString("password");
			
			Spitter spitter = new Spitter(spitterId, firstName, lastName, username, password);
			
			return new Spittle(id, message, postedTime, spitter);
		}
	}
}
