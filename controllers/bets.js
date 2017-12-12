const Group = require('../models/group');

// function betsIndex(req, res, next) {
//   Group
//     .findById(req.params.id)
//     .exec()
//     .then(group => {
//       const moment = group.moments.find(moment => moment.id === req.params.momentId);
//       return moment.bets;
//     })
//     .then(group => res.status(201).json(group))
//     .catch(next);
// }

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

// function betsShow(req, res, next) {
//   Group
//     .findById(req.params.id)
//     .exec()
//     .then(group => {
//       const moment = group.moments.find(moment => moment.id === req.params.momentId);
//       return moment;
//     })
//     .then(group => res.status(201).json(group))
//     .catch(next);
// }

module.exports = {
  // index: betsIndex,
  create: betsCreate,
  // show: betsShow
  // delete: betsDelete
};
