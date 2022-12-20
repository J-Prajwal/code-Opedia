const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
  userId: { type: String, require: true },
  problem_url: { type: String, require: true },
  platform_name: { type: String, require: true },
  problem_name: { type: String, require: true },
  description: { type: String, rquire: true },
  textual_approach: { type: String },
  pictorial_approach: { type: String },
  textual_reference: { type: String },
  video_reference: { type: String },
  solution_code: { type: String, require: true },
  language_used: { type: String, require: true },
  difficulty: { type: String, require: true },
});

const ProblemModel = mongoose.model("problem", problemSchema);

module.exports = ProblemModel;
