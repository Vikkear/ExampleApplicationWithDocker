# ExampleApplicationWithDocker

- Frontend
  The frontend is just a basic react.js application where you can look at the users in your database and also add new users.

- Backend
  The backend is set up in node.js/express together with a MYSQL database. The backend supports three different calls:
  GET localhost:8000/ - Just prints a hello world
  GET localhost:8000/getUsers - Gets all of the users in the database and returns it
  POST localhost:8000/addUser - Adds a user to the database.

- Database
  The database is a MYSQL database with a db called "cloudcomputing" and a table called "users".
  The setup files for the database are in the folder /src/server/sql

- Docker
