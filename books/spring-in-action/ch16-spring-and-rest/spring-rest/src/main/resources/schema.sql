DROP TABLE IF EXISTS spittle;
DROP TABLE IF EXISTS spitter;

CREATE TABLE spitter (
	id IDENTITY,
	firstName VARCHAR(30) NOT NULL,
	lastName VARCHAR(30) NOT NULL,
	username VARCHAR(16) NOT NULL,
	password VARCHAR(25) NOT NULL
);

CREATE TABLE spittle (
	id IDENTITY,
	message VARCHAR(2000) NOT NULL,
	postedTime DATETIME NOT NULL,
	spitterId INTEGER NOT NULL,
	FOREIGN KEY (spitterId) REFERENCES spitter(id)
);
