const express = require("express");
const UserModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const saltRounds = 10; // number of times salting will be done

const userController = express.Router();

userController.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send({ message: "User Data Found!", users });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

userController.post("/register", async (req, res) => {
  const { fullname, email, password, skills } = req.body;
  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      return res.status(500).send({ error: "Please try again!" });
    }
    const data = new UserModel({ fullname, email, password: hash, skills });
    data.save();
    res.status(200).send({ message: "Signup successful!", data });
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) res.status(404).send({ message: "No such user found!" });
  const hash = user.password;
  bcrypt.compare(password, hash, async (err, result) => {
    if (result) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.SECRET
      );
      res.status(200).send({ message: "Login Successfull", token, user });
    } else {
      res
        .status(401)
        .send({ message: "Unauthorised Access, Please try again." });
    }
  });
});

module.exports = userController;
