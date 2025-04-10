const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

// app.get("", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });

app.get("", (req, res) => {
  res.render("home");
});

app.get("/profile", (req, res) => {
  const user = {
    name: "John Doe",
    age: 30,
    location: "New York",
    skills: ["JavaScript", "Node.js", "Express", "Python", "Django", "Flask"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.listen(5000);
