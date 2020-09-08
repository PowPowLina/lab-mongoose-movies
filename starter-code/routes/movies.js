const express = require('express');
const router  = express.Router();

const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity')

/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find().populate('cast').then((movies) => {
        console.log(movies);
        res.render('movies/index', { movies });
    })
    .catch(error => {
        next(error);
    });
});

router.get('/movies/new', (req, res)=> {
    Celebrity.find().then(celebritiesFromDb => {
        res.render('movies/new', { celebrities: celebritiesFromDb});
    }).catch(error => {
        next(error);
    });
    
});




router.post('/movies', (req, res) => {
    const { title, genre, plot, cast } = req.body;
    Movie.create({
        title,
        genre,
        plot,
        cast
    }).then(movie => {
        console.log('IST HIER EIN CAAAAST?:', cast);
      console.log(`New Movie, ${movie}`);
      res.redirect('/movies');
    }).catch(error => {
      console.log(error);
      res.redirect('/');
    });
 
 });


module.exports = router;