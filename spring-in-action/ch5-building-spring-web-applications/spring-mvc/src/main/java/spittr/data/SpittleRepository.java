package spittr.data;

import java.util.List;
import spittr.Spittle;

public interface SpittleRepository {
	
	public Spittle findOne(long spittleId);
	
	public List<Spittle> findSpittles(long max, int count);
}
