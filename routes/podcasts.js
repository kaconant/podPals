var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated;
const models = require('../models');

/* GET users listing. */
router.get('/', function (req, res, next) {
    models.User.findById(req.podcast)
    .then(podcast => {
        res.render('podcast', {
        podcast: podcast
        });
    })
});

// Get individual podcast and its reviews
router.get('/:id', (req, res) => {
    // Find all Reviews w/ the Podcast ID
    models.Review.findAll({ where: { PodcastId: req.params.id }})
    // Send reviews & podcast data to the 'podcast' template
    .then( (reviews) => { res.render('podcast', {
            layout: 'pclayout',
            podcast: models.Podcast.findById(req.params.id),
            reviews: reviews,
            users: models.User.findAll({ where: { id: reviews.UserId } }),
            isLoggedIn: ensureAuthenticated()
        });
        res.send({
            'reviews': reviews,
            'users': users,
            'podcast_id': podcast
        });
    });
});

router.post('/:id/reviews', (req, res) => {
    const podcastId = req.params.id; 
    models.Review.create({
        rating: req.body.rating,
        comment: req.body.comment,
        UserId: req.body.UserId,
        PodcastId: podcastId,
    });
    res.send(`Review posted to Podcast #${podcastId}`);
});
    
module.exports = router;