const express = require('express');
const TutorialModel = require('../models/tutorials.model');
const isAdminAuthentication = require('../middlewares/isAdminAuthentication');
const UserModel = require('../models/user.model');
const tutorialController = express.Router();

// getting all the tutes
tutorialController.get('/', async (req, res) => {
  if (req.query.q) {
    try {
      const prods = await TutorialModel.find({
        $or: [
          { category: { $regex: req.query.q } },
          { title: { $regex: req.query.q } },
        ],
      });
      res.status(200).send(prods);
    } catch (err) {
      res.status(500).send({ message: 'Please try again!' });
    }
  } else {
    try {
      const prods = await TutorialModel.find();
      res.status(200).send(prods);
    } catch (err) {
      res.status(500).send({ message: 'Please try again!' });
    }
  }
});

// posting new tute
tutorialController.post('/new', isAdminAuthentication, async (req, res) => {
  const {
    title,
    description,
    youtube_video_embed,
    article_link,
    category,
    isPlaylist,
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
      isPlaylist
    });
    data.save();
    res.status(201).send({ message: 'Tutorial added!', data });
  } catch (err) {
    res.status(500).send({ message: 'Internal server error' });
  }
});

tutorialController.patch(
  '/update/:id',
  isAdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    const {
      title,
      description,
      youtube_video_embed,
      article_link,
      category,
      isPlaylist,
      sub_category,
    } = req.body;
    try {
      const data = await UserModel.findByIdAndUpdate(id, {
        title,
        description,
        youtube_video_embed,
        article_link,
        category,
        isPlaylist,
        sub_category,
      });
      res.status(200).send({ message: 'Tutorial updated!', data });
    } catch (err) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
);
tutorialController.delete(
  '/remove/:id',
  isAdminAuthentication,
  async (req, res) => {
    const id = req.params.id;
    try {
      const data = await UserModel.findByIdAndDelete(id);
      res.status(200).send({ message: 'Tutorial deleted!', data });
    } catch (err) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
);

module.exports = tutorialController;
