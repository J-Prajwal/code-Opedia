const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = mongoose.Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  skills: { type: Array, required: true },
  github: { type: String, required: true },
  linkedin: { type: String },
  about_me: { type: String, required: true },
  leetcode: { type: String },
  gfg: { type: String },
  hackerRank: { type: String },
  codeChef: { type: String },
  is_admin: { type: Boolean, default: false },
  no_of_problems: { type: Number, default: 0 },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 },
  no_of_contests: { type: Number, required: true, default: 0 },
  verified: { type: Boolean, required: true, default: false },
  profile_picture: { type: String, required: false, default: null },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
