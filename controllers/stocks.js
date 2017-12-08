const Stock = require('../models/stock');

function stocksIndex(req, res, next) {
  Stock
    .find()
    .exec()
    .then(stock => res.status(200).json(stock))
    .catch(next);
}

function stocksCreate(req, res, next) {
  Stock
    .create(req.body)
    .then(watch => res.status(201).json(watch))
    .catch(next);
}

function stocksShow(req, res, next) {
  Stock
    .findById(req.params.id)
    .then(stock => res.status(200).json(stock))
    .catch(next);
}

function stocksUpdate(req, res, next) {
  Stock
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(stock => res.status(200).json(stock))
    .catch(next);
}

function stocksDelete(req, res, next) {
  Stock
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: stocksIndex,
  create: stocksCreate,
  show: stocksShow,
  update: stocksUpdate,
  delete: stocksDelete
};
