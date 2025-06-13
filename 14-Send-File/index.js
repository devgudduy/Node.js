const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "public");
// console.log("public path is: -->", publicPath);

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/4O4.html`);
// });

// app.use(express.static(publicPath));
app.listen(5000);
