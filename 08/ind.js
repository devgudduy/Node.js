const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/new.txt`;

fs.writeFileSync(filePath, "This is a new file created using Node.js!");
