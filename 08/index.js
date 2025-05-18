const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/mango.txt`;
// Write File
// fs.writeFileSync(filePath, "mango is a fruit.");
// Read File
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });
// Append File
fs.appendFile(filePath, " and carrot is a vegetable.", (err) => {
  if (!err) console.log("File updated successfully.");
});

// Rename File
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if (!err) console.log("File renamed successfully.");
// });
// Delete File
fs.unlinkSync(`${dirPath}/fruit.txt`);
