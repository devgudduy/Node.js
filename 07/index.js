const fs = require("fs"); // Importing the fs module to work with the file system
const path = require("path"); // Importing the path module to work with file and directory paths
const dirPath = path.join(__dirname, "files"); // Creating a path to the 'notes' directory
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/note" + i + ".txt", "This is note number " + i); // Writing files in the 'notes' directory
// }

fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    console.log("file name is: ", file);
  });
});
