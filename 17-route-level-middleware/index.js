const express = require("express");
const reqFilter = require("./middleware");
const app = express();
const port = 5000;
const route = express.Router();

// app.use(reqFilter);
// new
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Hello World! Nice to see you! Coders!");
});

app.get("/users", reqFilter, (req, res) => {
  res.send("Welcome to the users page!");
});

route.get("/about", (req, res) => {
  res.send("Welcome to the about page!");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to the Contact Page!");
});

app.use("/", route);

app.listen(port);
