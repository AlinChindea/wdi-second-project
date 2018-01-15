const router   = require('express').Router();
const trips    = require('../controllers/trips');
const sessions = require('../controllers/sessions');
const registrations = require('../controllers/registrations');
// const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('landing'));

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/trips/new')
  .get(trips.new);

//ask teaching staff about itre
// router.all('*', (req, res) => res.notFound());

module.exports = router;
