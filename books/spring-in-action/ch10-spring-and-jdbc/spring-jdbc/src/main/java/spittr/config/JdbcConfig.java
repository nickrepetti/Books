package spittr.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;

import spittr.data.SpitterRepository;
import spittr.data.SpittleRepository;
import spittr.data.jdbc.JdbcSpitterRepository;
import spittr.data.jdbc.JdbcSpittleRepository;

@Configuration
public class JdbcConfig {

	@Bean
	public DataSource dataSource() {
		return new EmbeddedDatabaseBuilder()
			.setType(EmbeddedDatabaseType.H2)
			.addScript("schema.sql")
			.addScript("data.sql")
			.build();
	}

	@Bean
	public JdbcTemplate jdbcTemplate(DataSource dataSource) {
		return new JdbcTemplate(dataSource);
	}

	@Bean
	public SpitterRepository spitterRepository(JdbcTemplate jdbcTemplate) {
		return new JdbcSpitterRepository(jdbcTemplate);
	}

	@Bean
	public SpittleRepository spittleRepository(JdbcTemplate jdbcTemplate) {
		return new JdbcSpittleRepository(jdbcTemplate);
	}
}
