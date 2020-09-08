const express = require('express');
const Movie = require('../models/Movie');
const router  = express.Router();

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find().then((movies) => {
        console.log(movies);
        res.render('movies/index', { movies });
    })
    .catch(error => {
        next(error);
    });
});

router.get('/movies/new', (req, res)=> {
    res.render('movies/new');
});



module.exports = router;