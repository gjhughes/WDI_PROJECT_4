const express      = require('express');
const router       = express.Router();

const auth         = require('../controllers/auth');
// const proxies      = require('../controllers/proxies');
const users        = require('../controllers/users');
const groups       = require('../controllers/groups');

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
  .post(groups.momentCreate);

router.route('/groups/:id/moments/:id')
  .get(groups.momentShow)
  .delete(groups.momentDelete);

module.exports = router;
