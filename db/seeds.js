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
    username: 'Emiliano',
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
      },{
        name: 'Rhone Valley',
        createdBy: users[0],
        river: 'Rhone',
        image: 'https://images.unsplash.com/photo-1506355683710-bd071c0a5828?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '46.633912',
        startPointLng: '8.593563',
        endPointLat: '45.768616',
        endPointLng: '4.840035',
        description: 'The route follows the Rhone Valley from the source of the river at Andermatt, Swizterland, down to Lake Geneva (Lac Leman), then out into France, to Lyon. You then continue directly south to the Rhone delta in the wild Camargue. The ride is mainly on dedicated bike paths or secondary roads. Except for mountainous sections at the beginning, which can be easily avoided by using the train, or starting the ride further down the valley, the route is reasonably flat.',
        featured: false
      },{
        name: 'Mississippi River Trail',
        createdBy: users[0],
        river: 'Mississippi',
        image: 'https://images.unsplash.com/photo-1506380459748-77ed039c2f88?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '47.562972',
        startPointLng: '-94.847663',
        endPointLat: '29.779874',
        endPointLng: '-90.000000',
        description: 'As it follows the Mississippi River corridor from its headwaters in northern Minnesota to the southernmost point in Louisiana, the Mississippi River Trail (MRT) provides a 3,000-plus-mile ride through America’s heartland. For those cyclists looking for an enjoyable multi-day tour—by crossing the river on one of the many biker friendly bridges, or via a ferry ride—the options for extended multi-day loop tours are unlimited.',
        featured: false
      },{
        name: 'Destra Po',
        createdBy: users[0],
        river: 'Po',
        image: 'https://images.unsplash.com/photo-1430391553909-82e0eed4d127?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '44.886223',
        startPointLng: '11.423004',
        endPointLat: '44.826314',
        endPointLng: '12.346343',
        description: 'The route is 124km long and suitable for any type of bicycle. It starts from Bondeno, a town 15km northwest of Ferrara and runs to Gorino in the region of Veneto. It is well paved all the way except the last part at the end, has clear easy to follow signs and is suitable for cycling family holidays. The best way to enjoy the route is, naturally, going at a slow pace and exploring the villages and towns on the way.',
        featured: false
      }]);
  })
  .then((trips) => console.log(`${trips.length} trips created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
