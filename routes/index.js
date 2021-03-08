var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
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
console.log(articles);
//res.send(articles)
res.render('articles/index', {articles} );
});

router.get('./articles/new', (req, res, next) => {
  res.render('articles/new', {article: new Article()})
  })
  
  

router.get('/about', (req, res, next) => {
  res.render('about')
  })


module.exports = router;
