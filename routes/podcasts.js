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
    let data = {
        podcast: null,
        revews: null
    }
    data.podcast = models.Podcast.findById(req.params.id)
    .then( (podcast) => { data.reviews = models.Review.findAll({ where: { PodcastId: podcast.id  }})})
    // Send reviews & podcast data to the 'podcast' template
    .then( () => { res.render('podcast', {
            layout: 'pclayout',
            podcast: JSON.stringify(data.podcast),
            reviews: JSON.stringify(data.reviews)
        });
        console.log(data);
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