package spittr;

import java.util.Date;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

public class Spittle {
	
	private final Long id;
	private final String message;
	private final Date time;
	private Double longitude;
	private Double latitude;
	private Spitter spitter;
	
	public Spittle(String message, Date time) {
		this(message, time, null, null);
	}
	
	public Spittle(String message, Date time, Double longitude, 
					Double latitude) {
		
		id = null;
		this.message = message;
		this.time = time;
		this.longitude = longitude;
		this.latitude = latitude;
	}
	
	public Spittle(Long id, String message, Date time, Spitter spitter) {
		this.id = id;
		this.message = message;
		this.time = time;
		longitude = null;
		latitude = null;
		this.spitter = spitter;
	}
	
	public Long getId() {
		return id;
	}
	
	public String getMessage() {
		return message;
	}
	
	public Date getTime() {
		return time;
	}
	
	public Double getLongitude() {
		return longitude;
	}
	
	public Double getLatitude() {
		return latitude;
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
