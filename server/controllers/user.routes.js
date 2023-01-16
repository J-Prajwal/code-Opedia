const express = require("express");
const UserModel = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const saltRounds = 10; // number of times salting will be done

const userController = express.Router();

userController.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({ username: req.query.q });
    res.status(200).send({ message: "User Data Found!", users });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

userController.post("/register", async (req, res) => {
  const {
    fullname,
    username,
    email,
    password,
    skills,
    github,
    linkedin,
    about_me,
    leetcode,
    gfg,
    hackerRank,
    codeChef,
    is_admin,
    no_of_problems,
    easy,
    medium,
    hard,
    no_of_contests,
    verified,
    profile_picture,
  } = req.body;
  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      return res.status(500).send({ error: "Please try again!" });
    }

    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) {
      return res.status(409).send({
        message: "Email is already in use.",
      });
    }
    const user = new UserModel({
      fullname,
      username,
      email,
      password,
      skills,
      github,
      linkedin,
      about_me,
      leetcode,
      gfg,
      hackerRank,
      codeChef,
      is_admin,
      no_of_problems,
      easy,
      medium,
      hard,
      no_of_contests,
      verified,
      profile_picture,
    });
    user.save();

    try {
      const usertemp = await UserModel.findOne({ email });
      const verificationToken = jwt.sign(
        { ID: usertemp._id },
        process.env.USER_VERIFICATION_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      const url = `http://localhost:8080/users/verify/${verificationToken}`;

      transporter.sendMail(
        {
          from: process.env.EMAIL_USERNAME,
          to: email,
          subject: "Verify Account",
          html: `Welcome to code'Opedia <br>Please <a href='${url}'>Click here to verify your account.</a>`,
        },
        (err, data) => {
          if (err) console.log(err);
        }
      );
      res
        .status(201)
        .send({ message: `Sent a verification email to ${email}` });
    } catch (err) {
      res.status(500).send(err);
    }
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

userController.get("/verify/:token", async (req, res) => {
  const { token } = req.params;
  if (!token) return res.status(422).send({ message: "Token Missing." });

  // verifying the token from the url
  let payload = null;
  try {
    payload = jwt.verify(token, process.env.USER_VERIFICATION_TOKEN_SECRET);
    console.log(payload, "io");
  } catch (err) {
    res.status(500).send({ message: "error 1" });
  }

  // findind the user with the matching id
  try {
    const user = await UserModel.findOne({ _id: payload.ID }).exec();
    if (!user) return res.status(404).send({ message: "User does not exist." });

    // updating user's verification status to true
    user.verified = true;
    await user.save();

    return res
      .status(200)
      .send({
        message: "Account Verified",
        login: "http://localhost:3000/login",
      });
  } catch (err) {
    res.status(500).send({ message: "error 2" });
  }
});

userController.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  try {
    const userData = await UserModel.findOne({ email }).exec();
    if (!userData)
      return res.status(404).send({ message: "Email not registered." });
    else {
      userData.verified = false;
      await userData.save();

      const verificationToken = jwt.sign(
        { ID: userData._id },
        process.env.USER_VERIFICATION_TOKEN_SECRET,
        { expiresIn: "7d" }
      );

      const url = `http://localhost:8080/users/verify/${verificationToken}`;

      transporter.sendMail(
        {
          from: process.env.EMAIL_USERNAME,
          to: email,
          subject: "Change Password",
          html: `<h3>Hi ${userData.fullname},
          </h3><br>Please <a href='${url}'>Click here to verify yourself.</a>
          <p>After verifying yourself, click <a href="http://localhost:8080/users/changepassword/${email}">here</a> to change your password</p>
          `,
        },
        (err, data) => {
          if (err) console.log(err);
        }
      );
      res
        .status(201)
        .send({ message: `Sent a verification email to ${email}` });
    }
  } catch (err) {
    res.status(501).send({ message: "Internal Server err", err });
  }
});

userController.patch("/changepassword/:email", async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;

  const user = await UserModel.findOne({ email }).exec();

  if (!user) return res.status(404).send({ message: "User not found" });

  if (!user.verified)
    return res
      .status(401)
      .send({ message: "Unauthorized, please verify your mail." });
  else {
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        return res.status(500).send({ error: "Please try again!" });
      }
      try {
        // await UserModel.findOneAndUpdate({ email }, { password });
        user.password = hash;
        await user.save();
        return res
          .status(200)
          .send({ message: "Password updated successfully.", user });
      } catch (err) {
        return res.status(500).send({ message: "Internal server error", err });
      }
    });
  }
});

module.exports = userController;
