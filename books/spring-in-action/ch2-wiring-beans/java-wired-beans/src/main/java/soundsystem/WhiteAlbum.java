package soundsystem;

import org.springframework.stereotype.Component;

@Component
public class WhiteAlbum implements CompactDisc {
	
	private String title = "The White Album";
	private String artist = "The Beatles";
	
	@Override
	public void play() {
		System.out.println("Playing " + title + " by " + artist);
	}
}
