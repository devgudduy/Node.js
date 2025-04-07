const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  console.log("data sent to the browser ---> ");
  res.send(
    `<h2>Hello, This is Home Page! and you'r welcome</h2> </br> <a href="/about">About</a> </br> <a href="/contact">Contact</a> </br> <a href="/help">Help</a>`
  );
});

app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="Enter your name" value = ${req.query.name} />
    <button>Submit</button>
    <a href="/">Go to Home Page</a>
    `);
});

app.get("/contact", (req, res) => {
  let myData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@test.com",
      phone: "1234567890",
      address: "123 Main St, City, Country",
      hobbies: ["reading", "traveling", "coding"],
    },
    {
      id: 2,
      name: "Mohan Doe",
      email: "mohan@test.com",
      phone: "0987654321",
      address: "456 Elm St, City, Country",
      hobbies: ["sports", "music", "art"],
    },
    {
      id: 3,
      name: "Rahul Kumar",
      email: "rahul@test.com",
      phone: "1122334455",
      address: "789 Oak St, City, Country",
      hobbies: ["gaming", "photography", "cooking"],
    },
    {
      id: 4,
      name: "Ravi Kumar",
      email: "ravi@test.com",
      phone: "5566778899",
      address: "101 Pine St, City, Country",
      hobbies: ["writing", "hiking", "painting"],
    },
  ];
  res.send(myData);
});

app.get("/help", (req, res) => {
  res.send("Hello, This is Help Page! </br> <a href='/'>Go to Home Page</a>");
});

app.listen(port);
