const mongoose = require('mongoose');

const tutorialSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  youtube_video_embed: { type: String, required: true },
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
