const express      = require('express');
const router       = express.Router();

const auth         = require('../controllers/auth');
const users        = require('../controllers/users');
const stocks       = require('../controllers/stocks');
const transactions = require('../controllers/transactions');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index);

router.route('/stocks')
  .get(stocks.index)
  .post(stocks.create);

router.route('/strock/:id')
  .get(stocks.show)
  .put(stocks.update)
  .delete(stocks.delete);

router.route('/transactions')
  .get(transactions.index)
  .post(transactions.create);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/transactions/:id')
  .get(transactions.show)
  .put(transactions.update)
  .delete(transactions.delete);

module.exports = router;
