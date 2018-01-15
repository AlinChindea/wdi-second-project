const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Trip = require('../models/trip');
const User = require('../models/user');

Trip.collection.drop();
User.collection.drop();

User
  .create([{
    firstName: 'Don',
    lastName: 'Emil',
    username: 'emiliano',
    email: 'emil@emil.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} user created`);
    return Trip
      .create([{
        name: 'Drauradweg',
        river: 'Drava',
        startPoint: '46.747435, 12.421015',
        endPoint: '46.640777, 14.948802',
        description: 'The Drau Cycle Path runs from the source of the Drau in Toblacher Feld, Italy, for 366 km along the eponymous river, through East Tyrol and Carinthia to Maribor in Slovenia.',
        featured: true
      }]);
  })
  .then((trips) => console.log(`${trips.length} trips created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
