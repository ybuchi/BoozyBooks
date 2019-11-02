DROP DATABASE IF EXISTS booziebooksDB_db;
CREATE DATABASE booziebooksDB_db;
USE booziebooksDB_db;

CREATE TABLE signups (
  id INTEGER AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  readingLevel VARCHAR(10) NOT NULL,
  bookTitle VARCHAR(100) NOT NULL,
  bookAuthor VARCHAR(25) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  readingStatus VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE chapterbooks  (
  id INTEGER AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  readingLevel VARCHAR(10) NOT NULL,
  bookTitle VARCHAR(100) NOT NULL,
  bookAuthor VARCHAR(25) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  readingStatus VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE sitewords (
  id INTEGER AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  readingLevel VARCHAR(10) NOT NULL,
  bookTitle VARCHAR(100) NOT NULL,
  bookAuthor VARCHAR(25) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  readingStatus VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM chapterbooks;
SELECT * FROM signups;
SELECT * FROM sitewords;
