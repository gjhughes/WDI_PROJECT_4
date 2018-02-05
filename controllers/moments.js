const Group = require('../models/group');
const CronJob = require('cron').CronJob;
const rp = require('request-promise');

function createCron(endTime, groupId, momentId) {
  return new CronJob(
    new Date(endTime),
    function() {
      return rp({
        uri: 'https://api.coindesk.com/v1/bpi/currentprice.json',
        json: true
      }).then(response => {

        const bpi = response[Object.keys(response)[3]];
        const gbp = bpi[Object.keys(bpi)[1]];
        const currentPrice = gbp[Object.keys(gbp)[4]];

        return Group.findById(groupId)
          .exec()
          .then(group => {
            const moment = group.moments.id(momentId);

            moment.endPrice = currentPrice;

            moment.bets
              .sort(
                (a, b) =>
                  Math.abs(currentPrice - b.prediction) -
                  Math.abs(currentPrice - a.prediction)
              )
              .forEach((bet, i) => {
                const user = group.members.find(member =>
                  member.user.equals(bet.user)
                );
                user.points += i * 5;
              });

            return group.save();
          });
      });
    },
    false,
    'Europe/London'
  );
}

function momentCreate(req, res, next) {
  Group.findById(req.params.id)
    .exec()
    .then(group => {
      if (!group) return res.notFound();
      const moment = group.moments.create(req.body);
      group.moments.push(moment);
      return group
        .save()
        .then(() => createCron(moment.endTime, group._id, moment._id))
        .then(() => res.status(201).json(moment));
    })
    .catch(next);
}

function momentShow(req, res, next) {
  Group.findById(req.params.id)
    .populate('moments.bets.user')
    .exec()
    .then(group => {
      if (!group) return res.notFound();
      const moment = group.moments.find(
        moment => moment.id === req.params.momentId
      );
      return moment;
    })
    .then(moment => res.status(201).json(moment))
    .catch(next);
}

function momentDelete(req, res, next) {
  Group.findById(req.params.id)
    .exec()
    .then(group => {
      if (!group) return res.notFound();
      const moment = group.moments.find(
        moment => moment.id === req.params.momentId
      );
      moment.remove();
      return group.save();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

// function getData(req, res, next) {
//   rp({
//     url: 'https://www.alphavantage.co/query',
//     qs: {
//       function: 'DIGITAL_CURRENCY_INTRADAY',
//       symbol: 'BTC',
//       market: 'USD',
//       apikey: 'XTWGBR0H1M1TYI7R'
//     },
//     json: true
//   })
//     .then(response => {
//
//       const timeSeries = response[Object.keys(response)[1]];
//       const latestTime = timeSeries[Object.keys(timeSeries)[0]];
//       const latestValue = latestTime[Object.keys(latestTime)[0]];
//
//       return Group
//         .findById(req.params.id)
//         .exec()
//         .then(group => {
//           const moment = group.moments.id(req.params.momentId);
//
//           if (moment.endPrice) moment.prevPrices.push(moment.endPrice);
//           moment.endPrice = latestValue;
//
//           moment.bets.sort((a, b) => Math.abs(latestValue - b.prediction) - Math.abs(latestValue - a.prediction))
//             .forEach((bet, i) => {
//               const user = group.members.find(member => member.user.equals(bet.user));
//               user.points += i * 5;
//             });
//           return group.save();
//         })
//         .then(group => {
//           const moment = group.moments.id(req.params.momentId);
//           return res.status(200).json(moment);
//         });
//     })
//     .catch(next);
// }

module.exports = {
  show: momentShow,
  create: momentCreate,
  delete: momentDelete
  // getData: getData
};
