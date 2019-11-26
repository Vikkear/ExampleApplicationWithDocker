# ExampleApplicationWithDocker

### Frontend
  The frontend is a basic react.js application where you can look at the users in your database and also add new users. <br>

### Backend
  The backend is set up in node.js/express together with a MYSQL database. <br>
  The backend supports three different calls: <br>
  GET localhost:8000/ - Just prints a hello world <br>
  GET localhost:8000/getUsers - Gets all of the users in the database and returns it <br>
  POST localhost:8000/addUser - Adds a user to the database. <br>
  DELETE localhost:8000/removeUser (not used in the frontend) - Removes a user from the database <br>

### Database
  The database is a MYSQL database with a db called "cloudcomputing" and a table called "users". <br>
  The table got two entries: username and password.  <br>
  The setup files for the database are in the folder /src/server/sql <br>

### Docker
  Running the applícation through docker is simply done by running the command `docker-compose up --build`in the root folder. <br>
  This will set up the environment for you in docker and you should be able to se the application running when you connect to 
  localhost:3001. <br>
  At the moment, the database needs to be set up after you have run the command, so you need to connect to your docker machine database and 
  add the user table to the "cloudcomputing" database.
  
  
  ##### Docker toolbox (ONLY FOR WINDOWS 10 HOME USERS)
   When running the application through the Docker-toolbox environment you will have to change the following files:
   * /src/server/config/db/config.json - Change the "host" value to your docker-toolbox IP (192.168.99.100)
   * /src/client/src/App.js - Change all "localhost" to your docker-toolbox IP (192.168.99.100)
   When you have done these two changes, the application should work correctly.
