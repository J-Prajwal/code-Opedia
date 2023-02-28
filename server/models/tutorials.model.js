const mongoose = require('mongoose');

const tutorialSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  youtube_video_embed: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/i.test(v);
      },
      message: (props) => `${props.value} is not a valid YouTube URL!`,
    },
  },
  article_link: { type: String, required: true },
  category: {
    type: String,
    enum: ['DSA', 'Development', 'Networking'],
    required: true,
  },
  isPlaylist: { type: Boolean, required: true },
  sub_category: {
    type: String,
    enum: [
      'MERN',
      'MEAN',
      'MEARN',
      'NextJs',
      'NXM',
      'Graphql',
      'Typescript',
      'NodeJs',
      'Express',
      'MongoDb',
    ],
  },
});

const TutorialModel = mongoose.model('tutorial', tutorialSchema);

module.exports = TutorialModel;
