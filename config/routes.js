const express = require('express');
const router  = express.Router();
const users   = require('../controllers/users');
const plans   = require('../controllers/plans');
const auth    = require('../controllers/auth');

router.route('/login')
    .post(auth.login);

router.route('/users')
    .get(users.index);

router.route('/users/:id')
    .get(users.show)
    .put(users.update)
    .delete(users.delete);

router.route('/plans')
    .get(plans.index);

router.route('/plans/:id')
    .get(plans.show)
    .put(plans.update)
    .delete(plans.delete);

module.exports = router;