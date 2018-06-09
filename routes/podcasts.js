var express = require('express');
var router = express.Router();
const ensureAuthenticated = require('../auth').ensureAuthenticated;
const Podcast = require('../models/podcast');

/* GET users listing. */
router.get('/', function (req, res, next) {
    User.findById(req.podcast)
    .then(podcast => {
        res.render('podcast', {
        podcast: podcast
        });
    })
});

module.exports = router;
