const Group = require('../models/group');

function momentCreate(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.notFound();
      group.moments.push(req.body);
      return group.save();
    })
    .then(group => res.status(201).json(group))
    .catch(next);
}

function momentIndex(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => res.status(201).json(group.moments))
    .catch(next);
}

function momentUpdate(req, res, next) {
  console.log(req.body);

  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      const moment = group.moments.find(moment => moment.id === req.params.momentId);
      console.log(moment);
    })
    .catch(next);
}

function momentShow(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.notFound();
      const moment = group.moments.find(moment => moment.id === req.params.momentId);
      return moment;
    })
    .then(moment => res.status(201).json(moment))
    .catch(next);
}

function momentDelete(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.notFound();
      const moment = group.moments.find(moment => moment.id === req.params.momentId);
      moment.remove();
      return group.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: momentIndex,
  show: momentShow,
  create: momentCreate,
  update: momentUpdate,
  delete: momentDelete
};
