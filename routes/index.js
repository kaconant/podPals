const express = require('express');
const router = express.Router();
const Podcast = require('../models/Podcast');

/* GET home page. */

router.get('/', (req, res) => {
  models.Podcast.findAll()
  .then( podcasts => {
    res.render('index', {
      title: 'PodPals',
      isLoggedIn: req.isAuthenticated(),
      podcasts: podcasts
    });
  });
});

module.exports = router;