const Group = require('../models/group');

function groupsIndex(req, res, next) {
  Group
    .find()
    .populate('moments createdBy members')
    .exec()
    .then(groups => res.status(200).json(groups))
    .catch(next);
}

function groupsCreate(req, res, next) {
  Group
    .create(req.body)
    .then(group => res.status(201).json(group))
    .catch(next);
}

function groupsShow(req, res, next) {
  Group
    .findById(req.params.id)
    .populate('members moments moments.bets moments.bets.user')
    .exec()
    .then(group => res.status(200).json(group))
    .catch(next);
}

function groupsUpdate(req, res, next) {
  Group
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(group => res.status(200).json(group))
    .catch(next);
}

function groupsDelete(req, res, next) {
  Group
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: groupsIndex,
  create: groupsCreate,
  show: groupsShow,
  update: groupsUpdate,
  delete: groupsDelete
};
