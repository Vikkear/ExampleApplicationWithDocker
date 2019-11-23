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
const config = require("../../config/db/config.json");
let db;

(async function() {
  db = await mysql.createConnection(config);

  process.on("exit", () => {
    db.end();
  });
})();

async function getUsers() {
  let test = await findAllInTable("users");
  return test;
}

async function findAllInTable(table) {
  let sql = `SELECT * FROM ??;`;
  let res;

  res = await db.query(sql, [table]);
  console.info(`SQL: ${sql} (${table}) got ${res.length} rows.`);

  return res;
}

async function addUser(username, password) {
  let sql = "INSERT INTO users (username, password) VALUES (?, ?);";
  let res;

  res = await db.query(sql, [username, password]);
  console.log(res);
  return res;
}

async function removeUser(username) {
  let sql = "DELETE FROM users WHERE username = ?;";
  let res;

  res = await db.query(sql, [username]);

  return res;
}
