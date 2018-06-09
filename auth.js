const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
const User = require('./models/user');
require('dotenv').config()

const setupAuth = (app) => {
  app.use(cookieParser());

  app.use(session({
    secret: 'whatever',
    resave: true,
    saveUninitialized: true
  }));

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/github/auth'
  }, (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({
      where: {
        github_id: profile.id
      }
    }).then(result => {
      return done(null, result[0]);
    }).catch(done)
  }));

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    done(null, id);
  });

  app.use(passport.initialize());

  app.use(passport.session());

  app.get('/login', passport.authenticate('github'));
  app.get('/logout', function (req, res, next) {
    req.logout();
    res.redirect('/');
  });

  app.get('/github/auth',
    passport.authenticate('github', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    });
};

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
}

module.exports = setupAuth;
module.exports.ensureAuthenticated = ensureAuthenticated;