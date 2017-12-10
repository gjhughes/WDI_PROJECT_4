const rp = require('request-promise');

function getCurrentPrice(req, res) {
  rp('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=CNY&apikey=XTWGBR0H1M1TYI7R')
    .then(response => {
      const data = JSON.parse(response);
      return res.status(200).json(data);
    });
}

module.exports = {
  price: getCurrentPrice
};
