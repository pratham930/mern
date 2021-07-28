const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/contact", (req, res) => {
  res.send("contact world");
});

app.get("/singup", (req, res) => {
  res.send("singup world");
});

app.get("/singin", (req, res) => {
  res.send("singin world");
});

app.listen(8000, () => {
  console.log(`chalu ho gya`);
});
