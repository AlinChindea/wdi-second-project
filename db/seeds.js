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
        description: 'This route showcases the Seine River valley at its finest, meaning you can effectively cycle from Paris to the English Channel at Le Havre. The Seine Valley would also make a great fixed based destination as there is plenty of variety for cyclists, from easy valley-bottom roads to short but often stiff climbs up the valley sides, often flanked by magnificent chalk cliffs.',
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
        name: 'Rhine Cycle Route',
        createdBy: users[0],
        river: 'Rhine',
        image: 'https://images.unsplash.com/photo-1430391553909-82e0eed4d127?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '46.633074',
        startPointLng: '8.674568',
        endPointLat: '51.976709',
        endPointLng: '4.130769',
        description: 'The River Rhine has its source at an altitude of 2345 metres, in a small shimmering lake surrounded by high peaks. From Lake Toma, the small torrent cascades down the hills, joins other streams and becomes increasingly larger as it continues its journey over 1233 kilometres through Switzerland, Germany, France, to its mouth in the Netherlands. Explore the beauty of this river landscape and the picturesque towns and villages lining its banks, a number of which are listed as UNESCO World Heritage Sites.',
        featured: false
      },{
        name: 'Thames Valley',
        createdBy: users[0],
        river: 'Thames',
        image: 'https://images.unsplash.com/photo-1508711046474-2f4c2d3d30ca?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '51.467461',
        startPointLng: '-0.211363',
        endPointLat: '51.746917',
        endPointLng: '-1.267483',
        description: 'This popular route leads an escape from the city of London, following the Thames out into the countryside, passing through parks at Richmond and Hampton Court, the latter along the riverside path. It is a 99 miles ride including 40 miles traffic-free.',
        featured: false
      },{
        name: 'Mosel Valley',
        createdBy: users[0],
        river: 'Moselle',
        image: 'https://images.unsplash.com/photo-1502563800136-eaceb58f2572?auto=format&fit=crop&w=1500&q=80',
        startPointLat: '49.818670',
        startPointLng: '6.752601',
        endPointLat: '50.363954',
        endPointLng: '7.604213',
        description: 'The Moselle is region of natural beauty where the river flows through a steep-sided valley and you can cycle along the river on both sides. The path is mostly flat and is going through a wine-growing country. This ride takes down to Koblenz where the Moselle valley ends and the river joins the Rhine.',
        featured: false
      },{
        name: 'La Loire à Vélo',
        createdBy: users[0],
        river: 'Loire',
        image: 'https://images.unsplash.com/photo-1470470558828-e00ad9dbbc13?auto=format&fit=crop&w=1050&q=80',
        startPointLat: '44.844444',
        startPointLng: '4.220000',
        endPointLat: '47.268904',
        endPointLng: '-2.149630',
        description: 'La Loire à Vélo is a cycling trail stretching almost 500 miles from the western coast to heartland France. It offers tourists one of the most diverse and interesting cycling routes in the whole of Europe.Spoiled between spectacular mountain scenery, endless vineyards and stunning historical architecture, it’s a great place to unwind. It starts in Goudet, nearby Mont Gerbier des Joncs, the source of the river in the Massif Central and ends at Bren-le-Pin near the Atlantic.',
        featured: false
      }]);
  })
  .then((trips) => console.log(`${trips.length} trips created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
