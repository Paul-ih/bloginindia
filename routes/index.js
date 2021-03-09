var express = require("express");
var router = express.Router();
const Article = require('../models/article')

/* GET home page. */

router.get("/", async (req, res, next) => {
  const articles = await Article.find().sort({date: 'desc'})
  res.render("index", { articles: articles });
});



router.get("/all", async (req, res, next) => {
  const articles = await Article.find().sort({date: 'desc'})
  res.render("all", { articles: articles });
});

// NECESSARY
router.get("/articles/new", (req, res, next) => {
  res.render("new");
});

router.get("/articles/edit/:id", async (req, res, next) => {
 const article = await Article.findById(req.params.id)
 
  res.render("edit");
});

router.get("/all", (req, res, next) => {
  res.render("all");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

module.exports = router;
