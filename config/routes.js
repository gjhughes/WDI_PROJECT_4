const express      = require('express');
const router       = express.Router();

const auth         = require('../controllers/auth');
const users        = require('../controllers/users');
const groups       = require('../controllers/groups');
const moments      = require('../controllers/moments');
const bets         = require('../controllers/bets');

const secureRoute  = require('../lib/secureRoute');

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/groups')
  .get(groups.index)
  .post(groups.create);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/groups/:id')
  .get(groups.show)
  .put(groups.update)
  .delete(groups.delete);

router.route('/groups/:id/moments')
  .post(moments.create);

router.route('/groups/:id/moments/:momentId')
  .get(moments.show)
  .put(secureRoute, moments.update)
  .delete(moments.delete);

router.route('/groups/:id/moments/:momentId/bets')
  .put(secureRoute, bets.create);

module.exports = router;
