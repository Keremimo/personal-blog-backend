const express = require("express");
const app = express();
const port = 3000;

const greeting = "Hiya!";

app.get("/", (req, res) => {
  res.send(greeting);
});

app.listen(port, () => {
  console.log(`Blog backend listening on port ${port}`);
});
