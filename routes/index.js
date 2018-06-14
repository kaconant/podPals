const express = require('express');
const router = express.Router();
const models = require('../models');

/* GET home page. */
router.get('/', (req, res) => {
  // Sequelize queries to pass into Promise.all
  let getReviews = models.Review.findAll();
  let getPodcasts =  models.Podcast.findAll();

  // Retrieve all reviews and podcasts, then send them to index.hbs view
  Promise.all([getReviews, getPodcasts])
  .then( data => {
      res.render('index', {
        title: 'PodPals',
        reviews: data[0],
        podcasts: data[1],
        isLoggedIn: req.isAuthenticated()
      });
      console.log(podcasts);
    });
});

module.exports = router;