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
        name: 'Drava Cycle Path',
        createdBy: users[0],
        river: 'Drava',
        image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '46.747435',
        startPointLng: '12.421015',
        endPointLat: '46.640777',
        endPointLng: '14.948802',
        description: 'The Drau Cycle Path runs from the source of the Drau in Toblacher Feld, Italy, for 366 km along the eponymous river, through East Tyrol and Carinthia to Maribor in Slovenia.',
        featured: true
      },{
        name: 'Donauradweg',
        createdBy: users[0],
        river: 'Danube',
        image: 'https://images.unsplash.com/photo-1507520413369-94de50653411?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '48.566736',
        startPointLng: '13.431947',
        endPointLat: '48.208174',
        endPointLng: '16.373819',
        description: 'The Danube cycle path is possibly the most famous cycle route in Europe. Most of its travelers cycle downstream, starting in or near Passau, in Germany, and ending their bike tour in Vienna.',
        featured: true
      },{
        name: 'Seine Valley',
        createdBy: users[0],
        river: 'Seine',
        image: 'https://images.unsplash.com/photo-1496887581365-9afc1c3adf4d?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '48.852968',
        startPointLng: '2.349902',
        endPointLat: '49.494370',
        endPointLng: '0.107929',
        description: 'to be added',
        featured: true
      }]);
  })
  .then((trips) => console.log(`${trips.length} trips created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
