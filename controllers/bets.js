const Group = require('../models/group');

function betsCreate(req, res, next) {
  req.body.user = req.currentUser.id;

  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      const moment = group.moments.find(moment => moment.id === req.params.momentId);
      moment.bets.push(req.body);
      return group.save();
    })
    .then(group => res.status(201).json(group))
    .catch(next);
}

module.exports = {
  create: betsCreate
};
