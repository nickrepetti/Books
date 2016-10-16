LIBRARY IEEE;
USE IEEE.std_logic_1164.all;

ENTITY halfAdder IS
  PORT( A    : IN  STD_LOGIC;
        B    : IN  STD_LOGIC;
        Sum  : OUT STD_LOGIC;
        Cout : OUT STD_LOGIC);
END ENTITY halfAdder;

ARCHITECTURE behavior OF halfAdder IS
BEGIN
  Sum <= A XOR B;
  Cout <= A AND B;
END ARCHITECTURE behavior;
