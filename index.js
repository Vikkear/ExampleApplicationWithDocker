var express = require("express");
var userManager = require("./userManager.js");
var app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
const router = express.Router();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
  data = {
    title: "Hej :)"
  };
  res.render("index", data);
});

app.get("/getUsers", async (req, res, next) => {
  let testData = await userManager.getUsers();
  res.json(testData);
});

app.post("/addUser", async (req, res, next) => {
  let data = req.query; // Username: data.username ; Password: data.password
  let resTwo = await userManager.addUser(data.username, data.password);
  res.json(resTwo);
});

app.delete("/removeUser", async (req, res, next) => {
  let data = req.query;
  let resTwo = await userManager.removeUser(data.username);
  res.json(resTwo);
});
