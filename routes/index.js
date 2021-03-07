var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let articles = [{
    title: "Test Article",
    date: Date.now(),
    description: "Test Description",
    image: "URL"
  },
  {
    title: 'Test Article2',
    date: Date.now(),
    description: 'Test Description 2',
    image: 'URL'
  },

]
console.log(articles);
// res.send(articles)
  res.render('index', articles );
});

module.exports = router;
