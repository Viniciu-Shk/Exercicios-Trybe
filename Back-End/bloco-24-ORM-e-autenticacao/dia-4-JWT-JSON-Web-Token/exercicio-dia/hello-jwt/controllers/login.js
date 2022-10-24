require('dotenv').config();
const jwt = require('jsonwebtoken');
const loginSchema = require('../validations/login/loginSchema');

const createLogin = async (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return res.status(400).json({ message: error.details[0].message });

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  let token;

  if (req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???') {
    token = jwt.sign({ ...req.body, admin: true }, process.env.JWT_SECRET, jwtConfig);
  } else {
    token = jwt.sign({ ...req.body, admin: false }, process.env.JWT_SECRET, jwtConfig);
  }

  res.status(200).json({ token });
};

module.exports = {
  createLogin,
};