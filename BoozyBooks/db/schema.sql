DROP DATABASE IF EXISTS booziechapterbooksDB_db;
CREATE DATABASE booziechapterbooksDB_db;
USE booziechapterbooksDB_db;

CREATE TABLE chapterbooks (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  author VARCHAR(30) NOT NULL,
  genre VARCHAR(30) NOT NULL,
  blog VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE sitewords (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  author VARCHAR(30) NOT NULL,
  genre VARCHAR(30) NOT NULL,
  blog VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM chapterbooks;

