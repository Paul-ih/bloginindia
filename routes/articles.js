const express = require("express");
const router = new express.Router();
const Article = require("../models/article.js");
const methodOverride = require("method-override");





//localhost:3000/article/anything
router.get("/:slug", async (req, res, next) => {

  console.log("i am in router.get/slug");
  try {
  // let article = await Article.find(slug : req.params.slug);
  let article = await Article.findOne({
    slug: req.params.slug
  });
  console.log(article);
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });

  } catch(err) {
    console.log('I am in error catch');
    console.log(err);
  }

});

// router.use(methodOverride("_method"));
//localhost:3000/
router.post("/", async (req, res, next) => {
 req.article = new Article()
 next()
console.log("I am in router.post");
},   saveArticleAndRedirect('new') );


// router.put("/:id", async (req, res, next) => {
//   req.article = await Article.findById(req.params.id)
//   next()
//  },
//  saveArticleAndRedirect('edit') );


//locqlhost:3000/qrticle/paul/delete
router.post("/:id/delete", async (req, res) => {
  console.log("I'm in article router.delete");
  const { id } = req.params; 
  console.log("------------DELETE DEMAND -----------")
  console.log(id)
  await Article.findByIdAndDelete(id)
    .then (() => res.redirect('/all'))
    .catch(err => next(err));
  }
);


function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
      article.title = req.body.title
      article.markdown = req.body.markdown
      article.date = req.body.date
      article.image = req.body.image
      article.city = req.body.city
    
    try {
  
      article = await article.save();
  console.log(article);
      res.redirect(`/articles/${article.slug}`);
    } catch (err) {
      console.log(err);
      res.render(`/articles/${path}`);
    } 
  }
}

module.exports = router;
