const express = require("express");
const uploadImage = require("../utils/uploadImage.js");
const fileUploadController = express.Router();

fileUploadController.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.send(err));
});

module.exports = fileUploadController;
