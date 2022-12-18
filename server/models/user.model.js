const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: { type: String, require: true },
  last_name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  skills: { type: Array, require: true },
  github: { type: String, require: true },
  linkedin: { type: String },
  about_me: { type: String, require: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
