--  Nick Repetti
--  CPE 410, Project #3
--  Spring 2013
--  Reflex Challenge Game

--  This game uses VHDL and the DE2 board so it can
--  be played on a VGA Monitor or TV.  The parts of
--  the DE2 used will be a push button, four 7-segment
--  displays, and the VGA port.

--  An object will be moving back and forth across
--  the screen, initially at a slower speed.  There
--  are three different "target" zones, that are
--  red, green, and blue in color.  Each zone has
--  a respective point value:
--  Red - 5 pts.
--  Green - 3 pts.
--  Blue -- 1 pt.

--  The object of the game is to stop the object by pressing
--  the push button on the DE2.  Whatever zone the object
--  is in when the player presses the button, will earn the
--  player points.  For every 10 points the player earns,
--  the object will speed up and the game will become more
--  challenging.

--  The player's score will be displayed onto four of the
--  7-segment displays on the DE2 board.




--  The comments below and throughout the code will help
--  to explain how this game is actually able to work.


--  The VGA industry standard operates at a Pixel Frequency of
--  25.175 MHz, a screen refresh rate of 60Hz, and a resolution
--  of ( 640 x 480 ).  Our DE2 board supports 10bit colors

LIBRARY IEEE;
USE IEEE.STD_LOGIC_1164.ALL;
USE IEEE.STD_LOGIC_ARITH.ALL;
USE IEEE.STD_LOGIC_UNSIGNED.ALL;

entity ReflexGame IS
    PORT(clock50In  : IN STD_LOGIC;
		   button	: IN STD_LOGIC;  --  Push button
        digit_Zero  : OUT STD_LOGIC_VECTOR(6 DOWNTO 0);  --  7 segment display 0
         digit_One  : OUT STD_LOGIC_VECTOR(6 DOWNTO 0);  --  7 segment display 1
         digit_Two  : OUT STD_LOGIC_VECTOR(6 DOWNTO 0);  --  7 segment display 2
       digit_Three  : OUT STD_LOGIC_VECTOR(6 DOWNTO 0);  --  7 segment display 3
           redOut   : OUT STD_LOGIC_VECTOR(9 DOWNTO 0);
           greenOut : OUT STD_LOGIC_VECTOR(9 DOWNTO 0);
           blueOut  : OUT STD_LOGIC_VECTOR(9 DOWNTO 0);
		   hsOut    : OUT STD_LOGIC;
		 clock25Out : OUT STD_LOGIC;
	       sync		: OUT STD_LOGIC;
		   blank 	: OUT STD_LOGIC;
		   vsOut    : OUT STD_LOGIC);

		--  This function takes in an integer and converts/decodes
		--  it into a 7-bit wide STD_LOGIC_VECTOR to be put on the
		--  7-segment displays
		FUNCTION decode( my_Int : INTEGER ) RETURN STD_LOGIC_VECTOR IS
			VARIABLE temp : STD_LOGIC_VECTOR( 6 DOWNTO 0 );
			BEGIN
				IF ( my_Int = 1 ) THEN
					temp := "1111001";
				ELSIF ( my_Int = 2 ) THEN
					temp := "0100100";
				ELSIF ( my_Int = 3 ) THEN
					temp := "0110000";
				ELSIF ( my_Int = 4 ) THEN
					temp := "0011001";
				ELSIF ( my_Int = 5 ) THEN
					temp := "0010010";
				ELSIF ( my_Int = 6 ) THEN
					temp := "0000010";
				ELSIF ( my_Int = 7 ) THEN
					temp := "1111000";
				ELSIF ( my_Int = 8 ) THEN
					temp := "0000000";
				ELSIF ( my_Int = 9 ) THEN
					temp := "0010000";
				ELSE
					temp := "1000000";
				END IF;
			RETURN temp;
		END decode;
END ReflexGame;

ARCHITECTURE Behavior OF ReflexGame IS
	SIGNAL clock25  : STD_LOGIC;
	SIGNAL hCount 	: STD_LOGIC_VECTOR (9 DOWNTO 0);
	SIGNAL vCount   : STD_LOGIC_VECTOR (9 DOWNTO 0);

	--  Declare the width and height, to be
	--  used for scaling the objects on screen
	--  Certain monitors have trouble displaying
	--  VGA properly, so by adjusting these 2
	--  values, the whole game will be scaled
	--  accordingly.
	CONSTANT screen_Width : INTEGER := 1024;
	CONSTANT screen_Height : INTEGER := 512;

	--  The boundaries for the moving object
	SIGNAL object_Width : INTEGER := 25;
	SIGNAL object_Left : INTEGER := ( screen_Width / 8 ) + 50;
	SIGNAL object_Right : INTEGER := object_Left + object_Width;
	SIGNAL object_Top : INTEGER := screen_Height / 2 - ( screen_Height / 32 );
	SIGNAL object_Bottom : INTEGER := screen_Height / 2 + ( screen_Height / 32 );
	SIGNAL direction : INTEGER := 1;  --  1 means move right, -1 means move left
	SIGNAL speed : INTEGER := 5;  --  Amount of pixels the object moves at
	SIGNAL object_Center : INTEGER;  --  X-axis center of the object, used to
									 --  identify which zone it is in
	SIGNAL score : INTEGER := 0;  --  Keeps track of the players current score

	--  These are used to create a delay using a counter,
	--  which determines how fast the object will move
	CONSTANT MAX_COUNT 	: INTEGER := 1e6; -- 20ms delay with 50 MHZ clock
	SIGNAL counter 		: INTEGER RANGE 0 TO MAX_COUNT;
	SIGNAL flag 		: STD_LOGIC;

	BEGIN
		clock25Out <= clock25;
		sync <= '0';
		blank <= '1';

			--  The DE2 has a built in 50MHz clock, so we can turn it into
			--  a 25 MHz clock, which is close enough to 25.175MHz.
			--  We grab every high and low of the 50MHz, and assign it
			--  as the 25MHz clock
		    PROCESS (clock50In)
		    BEGIN
			  IF clock50In'EVENT AND clock50In='1' THEN
			    IF (clock25 = '0') THEN
				  clock25 <= '1';
			    ELSE
				  clock25 <= '0';
			    END IF;
		      END IF;
		    END PROCESS;

			--  This process is used to actually draw
			--  each of the elements onto the screen
		    PROCESS (clock25)  --  Now we are using a 25MHz clock
		    BEGIN
				IF clock25'EVENT AND clock25 = '1' THEN

				--  Define the location of the object
				--  Since it will be moving, variables are used
				IF   ( ( hCount >= object_Left )
					AND ( hCount < object_Right )
			        AND ( vCount >= object_Top )
			        AND ( vCount < object_Bottom ) )
				THEN
				    redOut <= "1111111111";
			      greenOut <= "1111111111";
			       blueOut <= "1111111111";

				--  Now we will define the "target" zones
				--  ( Red Zone, Green Zone, Blue Zone )
				--  To prevent overlap, we define 2 zones
				--  for each color, except red ( 1 on the left
				--  of center, and 1 on the right

				-- Left Green Bar
				ELSIF   ( ( hCount >= ( screen_Width / 2- ( screen_Width * 5 / 32 ) ) )
					AND ( hCount < ( screen_Width / 2 - ( screen_Width / 32 ) ) )
			        AND (vCount >=  0 )
			        AND (vCount <   screen_Height ))
				THEN
				    redOut <= "0000000000";
			      greenOut <= "1111111111";
			       blueOut <= "0000000000";

				--  Red bar
				ELSIF ( ( hCount >= ( screen_Width / 2 - ( screen_Width / 32 ) ) )
					AND ( hCount < ( screen_Width / 2 + ( screen_Width / 32 ) ) )
			        AND (vCount >=  0 )
			        AND (vCount <   screen_Height ))
				THEN
				    redOut <= "1111111111";
			      greenOut <= "0000000000";
			       blueOut <= "0000000000";

				--  Right green bar
				ELSIF   ( ( hCount >= ( screen_Width / 2 + ( screen_Width / 32 ) ) )
					AND ( hCount < ( screen_Width / 2 + ( screen_Width * 5 / 32 ) ) )
			        AND (vCount >=  0 )
			        AND (vCount <   screen_Height ))
				THEN
				    redOut <= "0000000000";
			      greenOut <= "1111111111";
			       blueOut <= "0000000000";

				--  Right blue bar
				ELSIF   ( ( hCount >= ( screen_Width / 2 + ( screen_Width * 5 / 32 ) ) )
					AND ( hCount < ( screen_Width / 2 + ( screen_Width * 11 / 32 ) ) )
			        AND (vCount >=  0 )
			        AND (vCount <   screen_Height ))
				THEN
				    redOut <= "0000000000";
			      greenOut <= "0000000000";
			       blueOut <= "1111111111";

				--  Left blue bar
			    ELSIF   ( ( hCount >= ( screen_Width / 2 - ( screen_Width * 11 / 32 ) ) )
					AND ( hCount < ( screen_Width / 2 - ( screen_Width * 5 / 32 ) ) )
			        AND ( vCount >=  0 )
			        AND ( vCount <   screen_Height ))
				THEN
				    redOut <= "0000000000";
			      greenOut <= "0000000000";
			       blueOut <= "1111111111";

				--  Black background
				ELSE
				    redOut <= "0000000000";
			      greenOut <= "0000000000";
			       blueOut <= "0000000000";
			    END IF;

				--  We only want to draw based on our refresh rate
				--  For horizontal, it's every 96 pixels, and for
				--  vertical, it's every 2 lines
			    IF (hCount > "0000000000" ) AND (hCount < "0001100001" )
			    THEN
				  hsOut <= '0';
			    ELSE
				  hsOut <= '1';
				END IF;

				IF (vCount > "0000000000" ) AND (vCount < "0000000011" )
				THEN
				  vsOut <= '0';
				ELSE
				  vsOut <= '1';
				END IF;

				--  Here we increment our counters, going from left to right,
				--  top to bottom, resetting when hCount gets to 640, and vCount
				--  gets to 480
				 hCount <= hCount+"0000000001";
				 IF (hCount="1100100000") THEN
				   vCount <= vCount+"0000000001";
				   hCount <= "0000000000";
				 END IF;

				 IF (vCount="1000001001") THEN
				   vCount <= "0000000000";
				 END IF;
		  END IF;
		END PROCESS;

		--  This process will generate our clock
		--  delay that will be used for moving the object.
		--  The process counts for 20ms, once the count
		--  reaches its MAX, a flag is set, and the count
		--  resets and starts over
		PROCESS (clock50In)
		BEGIN
			IF (clock50In'EVENT AND clock50In = '1') THEN
				IF counter = MAX_COUNT - 1 THEN
					counter <= 0;
					flag <= '1';
				ELSE
					counter <= counter + 1;
					flag <= '0';
				END IF;
			END IF;
		END PROCESS;

		--  Once the flag is set, every 20ms,
		--  update the movement of the object
		PROCESS ( flag )
		BEGIN
			IF ( flag'EVENT AND flag = '1' ) THEN
				--  Change the position of the object
				object_Left <= object_Left + (speed * direction);
				object_Right <= object_Left + object_Width;
				object_Center <= ( object_Left + object_Right ) / 2;

				--  Change the direction if the object tries
				--  to go out of the screen boundaries
				IF ( object_Left > screen_Width - 200 ) THEN
					direction <= -1;
				ELSIF ( object_Right <= 50 ) THEN
					direction <= 1;
				END IF;

				--  If the player reaches a certain score
				--  the speed of the object is increased
				--  to make the game more difficult
				IF ( score >= 10 AND score < 20 ) THEN  -- Boundaries for "Level-Ups"
					speed <= 10;  --  Change the amount of pixels to move by
				ELSIF ( score >= 20 AND score < 30 ) THEN
					speed <= 15;
				ELSIF ( score >= 30 AND score < 40 ) THEN
					speed <= 20;
				ELSIF ( score >= 40 AND score < 50 ) THEN
					speed <= 25;
				ELSIF ( score >= 50 AND score < 60 ) THEN
					speed <= 30;
				END IF;
			END IF;
		END PROCESS;

		--  This last process is in charge of
		--  calculating and tracking the player's
		--  score, as well as outputting it to the
		--  4 7-segment displays
		PROCESS ( button )
		BEGIN
			--  Because of the fact that the score
			--  can range from 0-9999, there are
			--  special checks that are used to
			--  find what value (digit) to send to the
			--  7-segments.  It takes advantage of
			--  the modulus operator, in order to separate
			--  the number into 4 individual digits to send
			--  to the displays separately

			IF ( score >= 0 AND score < 10 ) THEN
				digit_Zero <= decode(score);
				digit_One <= decode(0);
				digit_Two <= decode(0);
				digit_Three <= decode(0);
			ElSIF ( score >= 10 AND score < 100 ) THEN
				digit_Zero <= decode(score MOD 10);
				digit_One <= decode(score / 10);
				digit_Two <= decode(0);
				digit_Three <= decode(0);
			ELSIF ( score >= 100 AND score < 1000 ) THEN
				digit_Zero <= decode(score MOD 10);
				digit_One <= decode(( score/ 10 ) MOD 10);
				digit_Two <= decode(score / 100);
				digit_Three <= decode(0);
			ELSIF ( score >= 1000 AND score < 10000 ) THEN
				digit_Zero <= decode((score MOD 100 ) MOD 10);
				digit_One <= decode((score / 10 ) MOD 10);
				digit_Two <= decode((score / 100) MOD 10);
				digit_Three <= decode(score / 1000);
			END IF;

			--  Here, the score is calculated
			--  every time the button is pressed
			--  Depending on what zone the object
			--  is currently in, the player will
			--  get more points
			IF ( button'EVENT AND button = '0' ) THEN
				--  Find the location of the object, give it points

				--  Left green bar ( 3 pts. )
				IF   ( ( object_Center >= ( screen_Width / 2- ( screen_Width * 5 / 32 ) ) )
					AND ( object_Center < ( screen_Width / 2 - ( screen_Width / 32 ) ) ) )
				THEN
					score <= score + 3;

				--  Red bar ( 5 pts. )
				ELSIF ( ( object_Center >= ( screen_Width / 2 - ( screen_Width / 32 ) ) )
					AND ( object_Center < ( screen_Width / 2 + ( screen_Width / 32 ) ) ) )
				THEN
					score <= score + 5;

				--  Right green bar ( 3 pts. )
				ELSIF   ( ( object_Center >= ( screen_Width / 2 + ( screen_Width / 32 ) ) )
					AND ( object_Center < ( screen_Width / 2 + ( screen_Width * 5 / 32 ) ) ) )
				THEN
					score <= score + 3;

				--  Right blue bar ( 1 pt. )
				ELSIF   ( ( object_Center >= ( screen_Width / 2 + ( screen_Width * 5 / 32 ) ) )
					AND ( object_Center < ( screen_Width / 2 + ( screen_Width * 11 / 32 ) ) ) )
				THEN
					score <= score + 1;

				--  Left blue bar ( 1 pt. )
				ELSIF   ( ( object_Center >= ( screen_Width / 2 - ( screen_Width * 11 / 32 ) ) )
					AND ( object_Center < ( screen_Width / 2 - ( screen_Width * 5 / 32 ) ) ) )
				THEN
					score <= score + 1;
				END IF;
			END IF;

			--  Cap out the score at 9999 and
			--  reset it to 0, since it won't
			--  fit on only four 7-segment displays
			IF ( score < 0 OR score > 9999 ) THEN
				score <= 0;
			END IF;
		END PROCESS;
 END Behavior;
