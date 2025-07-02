const http = require("http");
const myFunction = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<h2>Hello World! This is my first server in Node.js, I will learn it.</h2>"
  );
  res.end();
};



http.createServer(myFunction).listen(4000);
