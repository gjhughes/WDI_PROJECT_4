const Plan = require('../models/plan');

function plansIndex(req, res, next) {
  Plan
    .find()
    .exec()
    .then(plans => res.status(200).json(plans))
    .catch(next);
}

function plansShow(req, res, next) {
  Plan
    .findById(req.params.id)
    .then(plan => res.status(200).json(plan))
    .catch(next);
}

function plansUpdate(req, res, next) {
  Plan
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(plan => res.status(200).json(plan))
    .catch(next);
}

function plansDelete(req, res, next) {
  Plan
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: plansIndex,
  show: plansShow,
  update: plansUpdate,
  delete: plansDelete
}
