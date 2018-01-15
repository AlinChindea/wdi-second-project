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

router.route('/trips')
  .get(trips.index)
  .post(trips.create);

router.route('/trips/new')
  .get(trips.new);

router.route('trips/:id')
  .get(trips.show)
  .put(trips.update)
  .delete(trips.delete);

router.route('/trips/:id/edit')
  .get(trips.edit);

// router.route('/trips/:id/comments')
//   .post(trips.createComment);
//
// router.route('/trips/:id/comments/:commentId')
//   .delete(trips.deleteComment);

//ask teaching staff about itre
// router.all('*', (req, res) => res.notFound());

module.exports = router;
