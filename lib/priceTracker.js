// const Group   = require('../models/group');
// const CronJob = require('cron').CronJob;
// const rp      = require('request-promise');
//
// function priceTracker(endTime, groupId, momentId) {
//   return new CronJob('*/5 * * * *', function() {
//     return rp({
//       url: 'https://www.alphavantage.co/query',
//       qs: {
//         function: 'DIGITAL_CURRENCY_INTRADAY',
//         symbol: 'BTC',
//         market: 'USD',
//         apikey: 'XTWGBR0H1M1TYI7R'
//       },
//       json: true
//     })
//       .then(response => {
//
//         const timeSeries = response[Object.keys(response)[1]];
//         const latestTime = timeSeries[Object.keys(timeSeries)[0]];
//         const latestValue = latestTime[Object.keys(latestTime)[0]];
//
//         return Group
//           .findById(groupId)
//           .exec()
//           .then(group => {
//             const moment = group.moments.id(momentId);
//
//             moment.prevPrices.push = [{
//               price: latestValue, date: latestTime
//             }];
//             return group.save();
//           });
//       });
//   },
//   false,
//   'Europe/London');
// }
//
// module.exports = priceTracker;
