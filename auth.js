const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const User = require('./models/user');

const setupAuth = (app) => {
  app.use(cookieParser());

  app.use(session({
    secret: 'whatever',
    resave: true,
    saveUninitialized: true
  }));

  passport.use(new GitHubStrategy({
    clientID: '1691da776b29527abe46',
    clientSecret: '4ffbf051d1d62c183374853f5b28c2f36c4d8138',
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