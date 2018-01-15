const Trip = require('../models/trip');

function tripHome(req, res) {
  res.render('landing');
}

function tripIndex(req, res, next) {
  Trip
    .find()
    .exec()
    .then((trips) => res.render('trips/index', { trips }))
    .catch(next);
}

function tripSearch(req, res, next) {
  Trip
    .findOne({ name: req.query.search})
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();
      return res.render('trips/show', { trip });
    })
    .catch(next);
}

function tripNew(req, res) {
  res.render('trips/new');
}

function tripShow(req, res, next) {
  Trip
    .findById(req.params.id)
    //.populate('createdBy comments.createdBy')
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();
      return res.render('trips/show', { trip });
    })
    .catch(next);
}

function tripCreate(req, res, next) {
  // req.body.createdBy = req.user;
  Trip
    .create(req.body)
    .then(() => res.redirect('/trips'))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/trips/new', err.toString());
      }
      next(err);
    });
}

function tripEdit(req, res, next) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();
      return res.render('trips/edit', { trip });
    })
    .catch(next);
}

function tripUpdate(req, res, next) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();

      trip = Object.assign(trip, req.body);

      return trip.save();
    })
    .then((trip) => res.redirect(`/trips/${trip.params.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/trips/new', err.toString());
      }
      next(err);
    });
}

function tripDelete(req, res, next) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();
      return trip.remove();
    })
    .then(() => res.redirect('/trips'))
    .catch(next);
}

//to add create and delete comments

module.exports = {
  home: tripHome,
  index: tripIndex,
  search: tripSearch,
  new: tripNew,
  show: tripShow,
  create: tripCreate,
  edit: tripEdit,
  update: tripUpdate,
  delete: tripDelete
};
