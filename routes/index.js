var express = require('express');
var router = express.Router();



/* GET home page. */


router.get('/', (req, res, next) => {
  res.render('index')
  })


router.get('/all', (req, res, next) => {
  let articles = [{
    title: `Test Article`, 
    date: new Date(),
    description: `Content of the first article`,
    image: `https://static.timesofisrael.com/www/uploads/2018/01/F161227NS118.jpg`
  },
  {
    title: `Test Article2`,
    date: new Date(),
    description: `Content of the second article`,
    image: `https://tr-images.condecdn.net/image/7xK1BO74BNb/crop/810/f/lodhi-colony-street-art-delhi-gettyimages-609509478.jpg`
  },

]

  res.render('all', {articles} );
});


// NECESSARY 
router.get('/articles/new', (req, res, next) => {
  res.render('new')
  })
  
  router.get('/all', (req, res, next) => {
    res.render('all')
    })
  

router.get('/about', (req, res, next) => {
  res.render('about')
  })


module.exports = router;
