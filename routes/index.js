var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', (req, res, next) => {
  let articles = [{
    author: `testauthor`,
    title: `Test Article`, 
    description: `Content of the first article`,
    markdown: `markdown`,
    date: new Date(),
    image: `https://static.timesofisrael.com/www/uploads/2018/01/F161227NS118.jpg`
  },
  {
    author: `testauthor`,
    title: `Test Article2`,
    description: `Content of the second article`,
    markdown: `markdown`,
    date: new Date(),
    image: `https://tr-images.condecdn.net/image/7xK1BO74BNb/crop/810/f/lodhi-colony-street-art-delhi-gettyimages-609509478.jpg`
  },
]
console.log(articles);
// res.send(articles)
  res.render('articles/index', {articles} );
});

module.exports = router;
