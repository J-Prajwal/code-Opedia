const mongoose = require("mongoose");

const problemSchema = mongoose.Schema({
  userId: { type: String, required: true },
  problem_url: { type: String, required: true },
  platform_name: { type: String, required: true },
  problem_name: { type: String, required: true },
  description: { type: String, required: true },
  textual_approach: { type: String },
  pictorial_approach: { type: String },
  textual_reference: { type: String },
  video_reference: { type: String },
  solution_code: { type: String, required: true },
  language_used: { type: String, required: true },
  difficulty: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now() },
});

const ProblemModel = mongoose.model("problem", problemSchema);

module.exports = ProblemModel;
