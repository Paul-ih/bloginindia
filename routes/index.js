var express = require("express");
var router = express.Router();
const Article = require('../models/article')

/* GET home page. */

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/all", async (req, res, next) => {
  const articles = await Article.find().sort({date: 'desc'})
  res.render("all", { articles: articles });
});

// NECESSARY
router.get("/articles/new", (req, res, next) => {
  res.render("new");
});

router.get("/all", (req, res, next) => {
  res.render("all");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

module.exports = router;
