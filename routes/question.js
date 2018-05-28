'use strict';
const express = require('express');
const router = express.Router();

const Question = require('../models/Question');

router.get('/questions', (req, res, err) => {
  Question.find()
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
});

router.post('/questions', (req, res, next) => {
  const { question, answer } = req.body;
  const newQuestion = { question, answer };

  Question.create(newQuestion)
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      if (err) {
        err = new Error('There\'s an error')
        err.status = 400;
      }
      next(err);
    });
  });

module.exports = router;