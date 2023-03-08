const express = require('express');
const connectDatabase = require('./config/db');
const userController = require('./controllers/user.routes');
const authentication = require('./middlewares/authentication');
const problemController = require('./controllers/problem.routes');
const fileUploadController = require('./controllers/fileUploads.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const tutorialController = require('./controllers/tutorials.routes');
const reminder = require('./controllers/reminder.routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(bodyParser.text({ limit: '200mb' }));

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Homepage!');
});
app.use('/', fileUploadController);
app.use('/users', userController);
app.use('/', reminder);

app.use(authentication);
app.use('/problems', problemController);
app.use('/tutorials', tutorialController);

app.listen(process.env.PORT, async () => {
  try {
    await connectDatabase;
    console.log('Database connected!');
  } catch (err) {
    console.log(err);
  }
  console.log('Server listening at http://localhost:8080');
});
