const express = require("express");
const connectDatabase = require("./config/db");
const userController = require("./controllers/user.routes");
const authentication = require("./middlewares/authentication");
const dataController = require("./controllers/data.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use(authentication);

app.get("/", (req, res) => {
  res.send("Homepage!");
});

app.use("/data", dataController);

app.listen(process.env.PORT, async () => {
  try {
    await connectDatabase;
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
  }
  console.log("Server listening at http://localhost:8080");
});
