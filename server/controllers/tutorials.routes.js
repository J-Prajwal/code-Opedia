const express = require("express");
const TutorialModel = require("../models/tutorials.model");
const tutorialController = express.Router();

// getting all the tutes
tutorialController.get("/", async (req, res) => {
  try {
    const data = await TutorialModel.find();
    res.status(200).send({ message: "Data retrieved!", data });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
});

// posting new tute
tutorialController.post("/new", async (req, res) => {
  const {
    title,
    description,
    youtube_video_embed,
    article_link,
    category,
    sub_category,
  } = req.body;
  try {
    const data = new TutorialModel({
      title,
      description,
      youtube_video_embed,
      article_link,
      category,
      sub_category,
    });
    data.save();
    res.status(201).send({ message: "Tutorial added!", data });
  } catch (err) {
    res.status(500).send({ message: "Internal server error" });
  }
});
