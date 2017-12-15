const Group   = require('../models/group');
const CronJob = require('cron').CronJob;
const rp      = require('request-promise');

function priceTracker(endTime, groupId, momentId) {
  return new CronJob(new Date(endTime), function() {
    return rp({
      url: 'https://www.alphavantage.co/query',
      qs: {
        function: 'DIGITAL_CURRENCY_INTRADAY',
        symbol: 'BTC',
        market: 'USD',
        apikey: 'XTWGBR0H1M1TYI7R'
      },
      json: true
    })
      .then(response => {

        const timeSeries = response[Object.keys(response)[1]];
        const latestTime = timeSeries[Object.keys(timeSeries)[0]];
        const latestValue = latestTime[Object.keys(latestTime)[0]];

        return Group
          .findById(groupId)
          .exec()
          .then(group => {
            const moment = group.moments.id(momentId);

            moment.endPrice = latestValue;
            moment.prevPrices = [{
              price: laestVale, date: latestTime
            }]
            return group.save();
          });
      });
  },
  false,
  'Europe/London');
}

module.exports = priceTracker;



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
// //
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
