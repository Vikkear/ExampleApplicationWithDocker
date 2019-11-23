-- Creates the database
CREATE DATABASE IF NOT EXISTS cloudcomputing;

-- Handles premissions.
DROP USER IF EXISTS 'user'@'%';

GRANT ALL ON cloudcomputing.* TO user@localhost IDENTIFIED BY 'pass';

  
FLUSH PRIVILEGES;
