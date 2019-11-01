DROP DATABASE IF EXISTS booziechapterbooksDB_db;
CREATE DATABASE booziechapterbooksDB_db;
USE booziechapterbooksDB_db;

CREATE TABLE chapterbooksDB (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE sitewordsDB (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);


