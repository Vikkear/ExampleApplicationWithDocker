/**
 * A module exporting functions to access the bank database.
 */
"use strict";

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  removeUser: removeUser
};

const mysql = require("promise-mysql");
const config = require("./config/db/config.json");

let db;

(async function() {
  db = await mysql.createConnection(config);

  process.on("exit", () => {
    db.end();
  });
})();

async function getUsers() {
  db = await mysql.createConnection(config);
  let test = await findAllInTable("users");
  return test;
}

async function findAllInTable(table) {
  let sql = `SELECT * FROM ??;`;
  let res;

  res = await db.query(sql, [table]);

  return res;
}

async function addUser(username, password) {
  db = await mysql.createConnection(config);

  // Check for user before adding...
  let sql = "SELECT username FROM users WHERE username = ?";
  let res;

  

  res = await db.query(sql, [username]);

  if (res.length > 0) {
    return "userExists";
  }

  //Adding new user
  sql = "INSERT INTO users (username, password) VALUES (?, ?);";

  res = await db.query(sql, [username, password]);
  return res;
}

async function removeUser(username) {
  let sql = "DELETE FROM users WHERE username = ?;";
  let res;

  res = await db.query(sql, [username]);

  return res;
}
