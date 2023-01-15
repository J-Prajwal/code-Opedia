const express = require("express");
const connectDatabase = require("./config/db");
const userController = require("./controllers/user.routes");
const authentication = require("./middlewares/authentication");
const problemController = require("./controllers/problem.routes");
const fileUploadController = require("./controllers/fileUploads.routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Homepage!");
});
app.use("/users", userController);
// app.use(authentication);
app.use("/", fileUploadController);
app.use("/problems", problemController);

app.listen(process.env.PORT, async () => {
  try {
    await connectDatabase;
    console.log("Database connected!");
  } catch (err) {
    console.log(err);
  }
  console.log("Server listening at http://localhost:8080");
});
