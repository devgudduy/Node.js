const app = require("./01 app.js");
var a = 20;
var b = 30;
var c = 50;
// console.log(a + b + c);

// console.warn("This is a warning");
// console.error("This is an error");

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(app.x, app.y);
// console.log(app.z());

const arr = [2, 4, 6, 9, 8, 7, 5, 3, 1];
let result = arr.filter((item) => {
  return item > 3;
});

// console.log(result);

// const fs = require("fs");
const gs = require("fs").writeFileSync;
// fs.writeFileSync("dev.txt", "I am a developer and I am learning Node.js");
// fs("code.txt", "write some line of code here...");
gs("new.txt", "I am a developer and I am learning Node.js");

// console.log("File written successfully");
console.log("-->", __dirname);
console.log("-->", __filename);
