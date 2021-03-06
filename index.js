'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');

const bodyParser = require('body-parser');
const passport = require('passport');

const authRouter = require('./routes/auth');
const questionRouter = require('./routes/question');
const userRouter = require('./routes/user');

const localStrategy = require('./passport/local');
const jwtStrategy = require('./passport/jwt');

const app = express();

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/api', questionRouter);

app.use('/users', userRouter);

function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
