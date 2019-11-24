var express = require("express");
var userManager = require("./userManager.js");
var app = express();
app.use(express.json());

let allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};
app.use(allowCrossDomain);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

app.get("/", (req, res, next) => {
  res.json("Hello world!");
});

app.get("/getUsers", async (req, res, next) => {
  let testData = await userManager.getUsers();
  res.json(testData);
});

app.post("/addUser", async (req, res, next) => {
  let data = req.body; // Username: data.username ; Password: data.password

  if (!data.username || !data.password) {
    return res.status(403).send({ error: "Missing Arguments" });
  }

  let resTwo = await userManager.addUser(data.username, data.password);

  if (resTwo === "userExists") {
    return res.status(403).send({ error: "User already exists!" });
  }

  return res.json(resTwo);
});

app.delete("/removeUser", async (req, res, next) => {
  let data = req.query;
  let resTwo = await userManager.removeUser(data.username);
  return res.json(resTwo);
});
