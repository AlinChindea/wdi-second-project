const Trip = require('../models/trip');

function tripHome(req, res) {
  res.render('landing');
}

function tripFeatured(req, res, next) {
  Trip
    .find({featured: true})
    // .populate('createdBy comments.createdBy')
    .exec()
    .then((trips) => res.render('trips/featured', { trips }))
    .catch(next);
}

function tripIndex(req, res, next) {
  Trip
    .find()
    .populate('createdBy comments.createdBy')
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
  // console.log('in tripShow');
  Trip
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();
      return res.render('trips/show', { trip });
    })
    .catch(next);
}

function tripCreate(req, res, next) {
  // console.log('in tripCreate');
  req.body.createdBy = req.user;
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
    .then((trip) => res.redirect(`/trips/${trip.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/trips/${req.params.id}/edit`, err.toString());
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

function createComment(req, res, next) {
  req.body.createdBy = req.user;

  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();

      trip.comments.push(req.body);
      return trip.save();
    })
    .then((trip) => {
      res.redirect(`/trips/${trip.id}`);
    })
    .catch(next);
}

function deleteComment(req, res, next) {
  Trip
    .findById(req.params.id)
    .exec()
    .then((trip) => {
      if(!trip) return res.notFound();

      const comment = trip.comments.id(req.params.commentId);
      comment.remove;

      return trip.save();
    })
    .then((trip) => {
      res.redirect(`/trips/${trip.id}`);
    })
    .catch(next);
}

module.exports = {
  home: tripHome,
  featured: tripFeatured,
  index: tripIndex,
  search: tripSearch,
  new: tripNew,
  show: tripShow,
  create: tripCreate,
  edit: tripEdit,
  update: tripUpdate,
  delete: tripDelete,
  createComment: createComment,
  deleteComment: deleteComment
};
