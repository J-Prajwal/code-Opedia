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

problemController.post("/new", (req, res) => {
    const payload = req.body;
    console.log(payload);
})

module.exports = problemController;
