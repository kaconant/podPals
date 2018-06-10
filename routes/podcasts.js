var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated;
const models = require('../models');

/* GET users listing. */
/*
router.get('/', function (req, res, next) {
    models.User.findById(req.podcast)
    .then(podcast => {
        res.render('podcast', {
        podcast: podcast
        });
    })
});
*/

// Get individual podcast and its reviews
router.get('/:id', (req, res) => {
    // Find all Reviews w/ the Podcast ID
    models.Review.findAll({ where: { PodcastId: req.params.id }})
    // Send reviews & podcast data to the 'podcast' template
    .then( (reviews) => { res.render('podcast', {
            podcast: models.Podcast.findById(req.params.id),
            reviews: reviews
        });
    });
});


module.exports = router;