const express = require('express');
const ProblemModel = require('../models/problem.model');
const problemController = express.Router();

problemController.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log('userId', userId);
  try {
    const data = await ProblemModel.find({ userId });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

problemController.get('/singleProblem/:problemId', async (req, res) => {
  const problemId = req.params.problemId;
  try {
    const data = await ProblemModel.findById(problemId);
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

problemController.post('/new', async (req, res) => {
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
    res.status(201).send({ message: 'Problem added successfully', problem });
  } catch (err) {
    res.status(500).send({ message: 'Internal server error', err });
  }
});

module.exports = problemController;
