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
