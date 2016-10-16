import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.Arrays;
import java.util.HashMap;

public class NameScoreCalculator {
	
	public static final String DELIMITTER_COMMA = ",";
	
	public static void main(String args[]) throws Exception {
		if (args.length > 0) {
			String fileName = args[0];
			
			BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName));
		
			String currentLine = bufferedReader.readLine();
			
			if (currentLine != null) {
				String[] names = currentLine.split(DELIMITTER_COMMA);
				
				HashMap<Character, Integer> letterScoreMap = createLetterScoreMap();
				
				Arrays.sort(names);
				FileWriter fileWriter = new FileWriter(fileName);
				
				long nameScoreTotal = 0;
				
				for (int i = 0; i < names.length; i++) {
					String name = names[i];
					
					int nameScore = 0;
					
					for (int j = 0; j < name.length(); j++) {
						char currentCharacter = Character.toUpperCase(name.charAt(j));
						
						// Add letter value to name score
						if (letterScoreMap.containsKey(currentCharacter)) {
							nameScore += letterScoreMap.get(currentCharacter);
						}
					}
					
					// Multiply name score by position
					nameScore *= (i + 1);
					nameScoreTotal += nameScore;
					
					fileWriter.write(name);
				}
				
				System.out.println("Total name score: " + nameScoreTotal);
			} else {
				System.out.println("Error, no data in file");
			}
		} else {
			System.out.println("Missing filename. Please run the program with:\n java NameScoreCalculator names.txt");
		}
	}
		
	private static HashMap<Character, Integer> createLetterScoreMap() {
		HashMap<Character, Integer> letterScoreMap = new HashMap<Character, Integer>();
		letterScoreMap.put('A', 1);
		letterScoreMap.put('B', 2);
		letterScoreMap.put('C', 3);
		letterScoreMap.put('D', 4);
		letterScoreMap.put('E', 5);
		letterScoreMap.put('F', 6);
		letterScoreMap.put('G', 7);
		letterScoreMap.put('H', 8);
		letterScoreMap.put('I', 9);
		letterScoreMap.put('J', 10);
		letterScoreMap.put('K', 11);
		letterScoreMap.put('L', 12);
		letterScoreMap.put('M', 13);
		letterScoreMap.put('N', 14);
		letterScoreMap.put('O', 15);
		letterScoreMap.put('P', 16);
		letterScoreMap.put('Q', 17);
		letterScoreMap.put('R', 18);
		letterScoreMap.put('S', 19);
		letterScoreMap.put('T', 20);
		letterScoreMap.put('U', 21);
		letterScoreMap.put('V', 22);
		letterScoreMap.put('W', 23);
		letterScoreMap.put('X', 24);
		letterScoreMap.put('Y', 25);
		letterScoreMap.put('Z', 26);
		return letterScoreMap;
	}
}
