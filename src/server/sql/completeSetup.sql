-- Creates the database
CREATE DATABASE
IF NOT EXISTS cloudcomputing;

USE cloudcomputing;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    username VARCHAR(30),
    password VARCHAR(30)
);


INSERT INTO users
    (username, password)
VALUES
    ('Hej', '123');
