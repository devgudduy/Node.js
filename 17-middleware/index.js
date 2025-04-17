const express = require("express");
const app = express();
const port = 5000;
const portNumber = 3000;
const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide your age!");
  } else if (req.query.age < 18) {
    res.send("You are not allowed to access this page!");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Hello World! Nice to see you! Coders!");
});

app.get("/users", (req, res) => {
  res.send("Welcome to the users page!");
});

app.listen(port);
