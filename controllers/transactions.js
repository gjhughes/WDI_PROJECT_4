const Transaction = require('../models/transaction');

function transactionsIndex(req, res, next) {
  Transaction
    .find()
    .exec()
    .then(transaction => res.status(200).json(transaction))
    .catch(next);
}

function transactionsCreate(req, res, next) {
  Transaction
    .create(req.body)
    .then(watch => res.status(201).json(watch))
    .catch(next);
}

function transactionsShow(req, res, next) {
  Transaction
    .findById(req.params.id)
    .then(transaction => res.status(200).json(transaction))
    .catch(next);
}

function transactionsUpdate(req, res, next) {
  Transaction
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(transaction => res.status(200).json(transaction))
    .catch(next);
}

function transactionsDelete(req, res, next) {
  Transaction
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: transactionsIndex,
  create: transactionsCreate,
  show: transactionsShow,
  update: transactionsUpdate,
  delete: transactionsDelete
};
