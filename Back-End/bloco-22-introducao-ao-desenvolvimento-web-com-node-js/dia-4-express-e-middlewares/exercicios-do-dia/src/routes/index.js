const express = require('express');
const generateToken = require('../utils/generateToken');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptValidation = require('../middlewares/descriptValidation');
const createValidation = require('../middlewares/createValidation');
const ratingValidation = require('../middlewares/ratingValidation');
const difValidation = require('../middlewares/difValidation');
const signupValidation = require('../middlewares/signupValidation');
const auth = require('../middlewares/auth');

const route = express.Router();

route.post('/activities',
  auth,
  nameValidation,
  priceValidation,
  descriptValidation,
  createValidation,
  ratingValidation,
  difValidation,
  (req, res) => {
  res.status(201).json({ message: "Atividade Cadastrada com sucesso!" });
});

route.post('/signup', signupValidation, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token })
});

module.exports = route;