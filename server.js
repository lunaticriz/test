const express = require("express");
const app = express();
const { MONGO_URI } = require("./config");
const mongoose = require("mongoose");
const userController = require("./Controller/UserController");

app.use(express.json());
//Database connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("DB connected ...."));

app.get("/", (req, res) => {
  res.send("Hello RIzwan");
});

app.get("/users", userController.getUsers);

app.listen(8001, () => console.log("Server running on 8001 port"));
