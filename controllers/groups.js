const Group = require('../models/group');

function groupsIndex(req, res, next) {
  Group
    .find()
    .populate('createdBy')
    .populate('members')
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
    .populate('members')
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

function momentCreate(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.notFound();
      req.body.createdBy = req.group.id;
      group.moments.push(req.body);
      group.save();
      res.status(201).json(group);
    })
    .catch(next);
}

function momentDelete(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.notFound();
      const moment = group.moments.id(req.params.momentId);
      console.log(moment);
      moment.remove();
      group.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: groupsIndex,
  create: groupsCreate,
  show: groupsShow,
  update: groupsUpdate,
  delete: groupsDelete,
  momentCreate: momentCreate,
  momentDelete: momentDelete
};
