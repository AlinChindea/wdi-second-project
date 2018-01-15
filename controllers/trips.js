const Trip = require('../models/trip');

function tripHome(req, res) {
  res.render('landing');
}

function tripIndex(req, res) {
  Trip
    .find()
    .exec()
    .then((trips) => {
      res.tender('trips/index', { trips });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function tripSearch(req, res) {
  Trip
    .findOne({ name: req.query.search})
    .exec()
    .then((trip) => {
      if(!trip) return res.status(404).end();

      res.render('trips/show', { trip });
    })
    .catch(() => {
      res.status(500).end();
    });
}

function tripNew(req, res) {
  res.render('trips/new');
}

function tripShow(req, res) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.status(404).send('Not found');
      res.render('trips/show', { trip });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function tripCreate(req, res) {
  Trip
    .create(req.body)
    .then(()  => {
      res.redirect('/trips');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}




module.exports = {
  home: tripHome,
  index: tripIndex,
  search: tripSearch,
  new: tripNew,
  show: tripShow,
  create: tripCreate
};
