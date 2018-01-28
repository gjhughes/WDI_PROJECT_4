const User = require('../models/user');

function usersIndex(req, res, next) {
  User.find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersCreate(req, res, next) {
  User.create(req.body)
    .then(watch => res.status(201).json(watch))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .exec()
    .then(user => res.status(200).json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
