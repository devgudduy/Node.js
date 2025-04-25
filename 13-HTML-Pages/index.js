const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");
// console.log("public path is: -->", publicPath);

app.use(express.static(publicPath));

app.listen(5000);
