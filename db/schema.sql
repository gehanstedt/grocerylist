-- Schema
DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;
USE grocery_db;

CREATE TABLE grocery_list
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	in_basket BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

--
-- For Heroku
--
USE wi08r4zv8g4aixqw;
CREATE TABLE grocery_list
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	in_basket BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE `wi08r4zv8g4aixqw`.`grocery_list` 
CHANGE COLUMN `createdAt` `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP ;