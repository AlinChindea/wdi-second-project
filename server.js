const express        = require('express');
const morgan         = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const bodyParser     = require('body-parser');
const session        = require('express-session');
const routes         = require('./config/routes');
const authentication = require('./lib/authentication');
const mongoose       = require('mongoose');
mongoose.Promise     = require('bluebird');
const { port, env, dbURI } = require('./config/environment');

//to add: bodyParser, methodOverride, express-session, flash, custom responses, authentication, errorHandler, app.use(session)

const app = express();

mongoose.connect(dbURI);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
if(env === 'development') app.use(morgan('dev'));

app.use(session({
  secret: dbURI, //ask TA if correct
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(authentication);
app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
