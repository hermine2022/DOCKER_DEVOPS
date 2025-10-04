// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Docker by hermine silue  + CI/CD!");
});

module.exports = app;
