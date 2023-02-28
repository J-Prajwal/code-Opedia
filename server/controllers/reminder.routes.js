const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');
const UserModel = require('../models/user.model');

const reminder = express.Router();

reminder.post('/reminder/:userId', async (req, res) => {
  const userId = req.params.userId;
  const problem = req.body;
  try {
    const user = await UserModel.findById(userId);
    res.status(200).send({message: 'Reminder scheduled successfully', user});
  } catch (e) {
    res.status(500).send({ message: 'Internal Server Error', error: e });
  }
});

module.exports = reminder;
