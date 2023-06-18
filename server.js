const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello RIzwan");
});

app.listen(8001, () => console.log("Server running on 8001 port"));
