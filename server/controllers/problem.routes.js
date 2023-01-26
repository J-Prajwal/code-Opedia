const express = require("express");
const ProblemModel = require("../models/problem.model");
const problemController = express.Router();

problemController.get("/", async (req, res) => {
  try {
    const data = await ProblemModel.find();
    res.status(200).send({ message: "Data found", data });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

problemController.post("/new", async (req, res) => {
  const {
    userId,
    problem_url,
    platform_name,
    problem_name,
    description,
    textual_approach,
    pictorial_approach,
    textual_reference,
    video_reference,
    solution_code,
    language_used,
    difficulty,
    updatedAt,
  } = req.body;
  try {
    const problem = new ProblemModel({
      userId,
      problem_url,
      platform_name,
      problem_name,
      description,
      textual_approach,
      pictorial_approach,
      textual_reference,
      video_reference,
      solution_code,
      language_used,
      difficulty,
      updatedAt,
    });
    problem.save();
    res.status(201).send({ message: "Problem added successfully", problem });
  } catch (err) {
    res.status(500).send({ message: "Internal server error", err });
  }
});

module.exports = problemController;
