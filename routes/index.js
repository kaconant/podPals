const express = require('express');
const router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', (req, res) => {
  models.Podcast.findAll()
  .then( podcasts => {
    res.render('index', {
      title: 'PodPals',
      podcasts: podcasts,
      isLoggedIn: req.isAuthenticated()
    });
    console.log(podcasts);
  });
});

module.exports = router;