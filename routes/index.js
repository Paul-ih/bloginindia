var express = require("express");
var router = express.Router();
const Article = require("../models/article");

//  GET HOMEPAGE

router.get("/", async (req, res, next) => {
  const articles = await Article.find().sort({ date: "desc" });
  res.render("index", { articles: articles });
});

router.get("/all", async (req, res, next) => {
  const articles = await Article.find().sort({ date: "desc" });
  res.render("all", { articles: articles });
});

// NECESSARY FOR NEW 

router.get("/articles/new", (req, res, next) => {
  res.render("new");
});



// EDIT FIRST VERSION (EMPTY)
 
// router.get("/articles/edit/:id", async (req, res, next) => {
//   const article = await Article.findById(req.params.id);
//   res.render("edit");
// });


// EDIT SECOND VERSION
router.get('/articles/:id/edit', (req, res) => {
  console.log("I am in router.get edit");
  const { id } =  req.params;
 
  Article.findById(id)
    .then(articleToEdit => {
      console.log(articleToEdit);
    })
    .catch(error => next(error));
});




// OTHER PAGES

router.get("/all", (req, res, next) => {
  res.render("all");
});

router.get("/about", (req, res, next) => {
  res.render("about");
});

module.exports = router;
