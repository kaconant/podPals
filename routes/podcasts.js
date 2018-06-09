var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated;
const Podcast = require('../models/Podcast');

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.findById(req.podcast)
    .then(podcast => {
        res.render('podcast', {
        podcast: Podcast
        });
    })
});

module.exports = router;
