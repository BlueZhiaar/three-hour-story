var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var session = require('express-session');
var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();
const bodyParser = require('body-parser');

//モデルの読み込み
var User = require('./models/user');
var Characterdata = require('./models/characterdata');
var Episodelog = require('./models/episodelog');
User.sync().then(() => {
  Characterdata.belongsTo(User, {foreignKey: 'createdBy'});
  Characterdata.sync();
  Episodelog.belongsTo(Characterdata, {foreignKey: 'character_id'});
  Episodelog.sync();
  })

 

var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: process.env.HEROKU_URL ? process.env.HEROKU_URL + 'auth/github/callback' : 'http://localhost:8000/auth/github/callback'
},

  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      User.upsert({
        user_id: profile.id,
        user_name: profile.username
      }).then(() => {
        done(null, profile);
      });
    });
  }
));



var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var usersRouter = require('./routes/users');
var characterRouter = require('./routes/character');
var episodeRouter = require('./routes/episode');



var app = route(express());
app.use(helmet());

function route(req,res) {
  if(process.env.HEROKU_URL && req.headers['x-forwarded-proto'] === 'http') {
    handleReqHttp(req,res);
  }
}

function handleReqHttp(req,res){
  res.send('https通信にのみ対応してます。');
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'eded62b4b207d525', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/character', characterRouter);
app.use('/episode',episodeRouter);

app.use(bodyParser.urlencoded({ extended: true }));




app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] }),
  function (req, res) {

  }
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  }
);

app.get('/login', function (req,res) {
  res.render('login');
});

app.get('/logout', function (req,res) {
  req.logout();
  res.redirect('/');
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
