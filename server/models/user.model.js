const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
  fullname: { type: String, require: true },
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  skills: { type: Array, require: true },
  github: { type: String, require: true },
  linkedin: { type: String },
  about_me: { type: String, require: true },
  leetcode: { type: String },
  gfg: { type: String },
  hackerRank: { type: String },
  codeChef: { type: String },
  is_admin: { type: Boolean, default: false },
  no_of_problems: { type: Number, default: 0 },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 },
  verified: { type: Boolean, required: true, default: false },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
