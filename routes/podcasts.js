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
    let getPodcast = models.Podcast.findById(req.params.id);
    let getReviews = models.Review.findAll({ where: { PodcastId: req.params.id }});

    Promise.all([getPodcast, getReviews])
    // Send reviews & podcast data to the 'podcast' template
    .then( (data) => { res.render('podcast', {
            layout: 'pclayout',
            podcast: (data[0]),
            reviews: (data[1]),
        });
        console.log(data);
    });
    });

router.post('/:id/reviews', (req, res) => {
    models.Review.create({
        rating: req.body.rating,
        comment: req.body.comment,
        UserId: req.body.userId,
        PodcastId: req.params.id
    });
    res.send(null);
});

router.delete('/:podCastId/reviews/:reviewId', (req, res) => {
    models.Review.destroy({ where: { id: req.params.reviewId }});
})
    
module.exports = router;