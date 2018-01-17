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
        createdBy: users[0],
        river: 'Drava',
        image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1050&q=80',
        startPoint: {
          lat: '46.747435',
          lng: '12.421015'
        },
        endPoint: {
          lat: '46.640777',
          lng: '14.948802'
        },
        description: 'The Drau Cycle Path runs from the source of the Drau in Toblacher Feld, Italy, for 366 km along the eponymous river, through East Tyrol and Carinthia to Maribor in Slovenia.',
        featured: true
      },{
        name: 'Donauradweg',
        createdBy: users[0],
        river: 'Danube',
        image: 'https://images.unsplash.com/photo-1507520413369-94de50653411?auto=format&fit=crop&w=1050&q=80',
        startPoint: {
          lat: '48.566736',
          lng: '13.431947'
        },
        endPoint: {
          lat: '48.208174',
          lng: '16.373819'
        },
        description: 'to be added',
        featured: true
      },{
        name: 'Seine Valley',
        createdBy: users[0],
        river: 'Seine',
        image: 'https://images.unsplash.com/photo-1496887581365-9afc1c3adf4d?auto=format&fit=crop&w=1050&q=80',
        startPoint: {
          lat: '48.852968',
          lng: '2.349902'
        },
        endPoint: {
          lat: '49.494370',
          lng: '0.107929'
        },
        description: 'to be added',
        featured: true
      }]);
  })
  .then((trips) => console.log(`${trips.length} trips created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
