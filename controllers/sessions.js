const User = require('../models/user');

function newSession(req, res) {
  res.render('sessions/new');
}

function createSession(req, res) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).render('sessions/new', { message: 'Unrecognized credentials 🙅🏻‍♀️🙅🏾‍♂️'});
      }

      req.session.userId = user.id;
      req.user = user;
      req.flash('info', `Welcome, ${user.username}! 🚵🏻‍♀️`);
      res.redirect('/trips');
    })
    .catch(() => {
      res.satus(500).end();
    });
}

function deleteSession(req, res) {
  req.session.regenerate(() => res.redirect('/trips'));
}

module.exports = {
  new: newSession,
  create: createSession,
  delete: deleteSession
};
