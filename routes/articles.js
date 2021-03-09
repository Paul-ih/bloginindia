const express = require("express");
const router = express.Router();
const Article = require("../models/article.js");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// Mongoose Connect
mongoose.connect("mongodb://localhost/bloginindia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

router.get("/:slug", async (req, res, next) => {
  // let article = await Article.find(slug : req.params.slug);
  let article = await Article.findOne(req.params.slug);
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

router.use(methodOverride("_method"));

router.post("/", async (req, res, next) => {
  let article = new Article({
    title: req.body.title,
    markdown: req.body.markdown,
    date: req.body.date,
    image: req.body.image,
  });
  try {
    article = await article.save;
    res.redirect(`/articles/${article.slug}`);
  } catch (err) {
    res.render("/articles/new");
  }
});

router.delete("/:id"),
  async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect("/");
  };

module.exports = router;
