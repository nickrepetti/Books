INSERT INTO spitter (firstName, lastName, username, password) VALUES ('Default', 'User', 'default', 'defaultUser');
INSERT INTO spitter (firstName, lastName, username, password) VALUES ('Joe', 'Somebody', 'jsomebody', 'password1!');
INSERT INTO spitter (firstName, lastName, username, password) VALUES ('Sally', 'Nobody', 'snobody', 'wordpass1!');
INSERT INTO spitter (firstName, lastName, username, password) VALUES ('Nick', 'Repetti', 'nickrepetti', 'sekret!');

INSERT INTO spittle (message, postedTime, spitterId) VALUES ('This is the first Spittle!', CURRENT_TIMESTAMP(), 1);
INSERT INTO spittle (message, postedTime, spitterId) VALUES ('This is the second Spittle!', CURRENT_TIMESTAMP(), 2);
INSERT INTO spittle (message, postedTime, spitterId) VALUES ('This is the third Spittle!', CURRENT_TIMESTAMP(), 1);
INSERT INTO spittle (message, postedTime, spitterId) VALUES ('This is the fourth Spittle!', CURRENT_TIMESTAMP(), 2);
INSERT INTO spittle (message, postedTime, spitterId) VALUES ('This is the fifth Spittle!', CURRENT_TIMESTAMP(), 3);
