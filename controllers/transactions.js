const Transaction = require('../models/transaction');

function transactionsIndex(req, res, next) {
  Transaction
    .find()
    .populate('createdBy user')
    .exec()
    .then(transactions => res.status(200).json(transactions))
    .catch(next);
}

function transactionsCreate(req, res, next) {
  Transaction
    .create(req.body)
    .then(group => res.status(201).json(group))
    .catch(next);
}

function transactionsShow(req, res, next) {
  Transaction
    .findById(req.params.id)
    .exec()
    .then(group => res.status(200).json(group))
    .catch(next);
}

function transactionsUpdate(req, res, next) {
  Transaction
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(group => res.status(200).json(group))
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
