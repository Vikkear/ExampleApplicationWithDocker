import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//let connection = "localhost";
const connection = "192.168.99.100";

function StartPage() {
  const [userArray, setUserArray] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  // Gets the name of the users in the database
  const getUsers = () => {
    axios
      .get("http://192.168.99.100:8000/getUsers")
      .then(res => {
        setUserArray(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addUser = () => {
    const data = JSON.stringify({
      username: username,
      password: password
    });

    axios
      .post("http://192.168.99.100:8000/addUser", data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="getUsers">
        Press this button to get all users from the database: <br />
        <button onClick={getUsers}>Get Users</button>
      </div>
      <div className="showUsers">
        Here are all users: <br />
        {userArray.map(user => (
          <li>{user.username}</li>
        ))}
      </div>
      <div className="addUser">
        Here you can add new users: <br />
        Username: <br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>{" "}
        <br />
        Password: <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>{" "}
        <br />
        <button value="Add user" onClick={addUser}>
          Add user
        </button>
      </div>
    </div>
  );
}

export default StartPage;
