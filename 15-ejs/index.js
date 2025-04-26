const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "John Doe",
    age: 30,
    location: "New York",
  };

  res.render("profile", { user });
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.listen(5000);
