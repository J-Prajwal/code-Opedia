const express = require("express");
const DataModel = require("../models/data.model");
const dataController = express.Router();

dataController.get("/", async (req, res) => {
  try {
    const data = await DataModel.find();
    res.status(200).send({ message: "Data found", data });
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

dataController.post("/new", (req, res) => {
    const payload = req.body;
    console.log(payload);
})

module.exports = dataController;
