const jwt        = require('jsonwebtoken');
const { secret } = require('../config/environment');
const User       = require('../models/user');

function register(req, res, next) {
  User
    .create(req.body)
    .then(() => res.json({ message: 'Registration successful' }))
    .catch(next);
}

function login(req, res, next) {
  User
    .findOne({ email: req.body.email })
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) return res.status(401).json({ message: 'You\'re a dick head' });
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      return res.json({ message: `Welcome back ${user.firstName}`, token });
    })
    .catch(next);
}

module.exports = {
  login,
  register
};
