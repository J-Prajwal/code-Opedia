const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  userId: { type: String, require: true },
  problem_url: { type: String, require: true },
  platform_name: { type: String, require: true },
  problem_name: { type: String, require: true },
  description: { type: String, rquire: true },
  textual_approach: { type: String },
  pictorial_approach: { type: String },
  textual_reference: { type: String },
  video_reference: { type: String },
  solution_code: { type: String },
  language_used: { type: String },
  difficulty: { type: String },
});

const DataModel = mongoose.model("data", dataSchema);

module.exports = DataModel;
