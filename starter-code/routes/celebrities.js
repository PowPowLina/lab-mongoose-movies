const express = require('express');
const Celebrity = require('../models/Celebrity');
const router  = express.Router();

/* GET home page */
router.get('/celebrities', (req, res, next) => {
    Celebrity.find().then((celebrities) => {
        console.log(celebrities);
        res.render('celebrities/index', { celebrities });
    })
    .catch(error => {
        next(error);
    });
});

router.get('/celebrities/new', (req, res)=> {
    res.render('celebrities/new');
});

router.get('/celebrities/:celebrityId', (req, res, next) => {
    const id = req.params.celebrityId;
    Celebrity.findById(id).then(celebrityFromDb => {
      res.render('celebrities/show', {celebrity: celebrityFromDb});
    })
    .catch(error => {
        next(error);
    });
  });

  router.post('/celebrities', (req, res) => {
     const { name, occupation, catchPhrase } = req.body;
     Celebrity.create({
        name,
        occupation,
        catchPhrase,
     }).then(celebrity => {
       console.log(`New Celebrity, ${celebrity}`);
       res.redirect('/celebrities');
     }).catch(error => {
       console.log(error);
       res.redirect('/');
     });
  
  });
  
  router.post('/celebrities/:id/delete', (req, res, next) => {
    console.log('lets delete');
    const id = req.params.id;
    console.log(id);
    Celebrity.findByIdAndRemove(id)
    .then(()=> {
      res.redirect('/celebrities');
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
  });

module.exports = router;