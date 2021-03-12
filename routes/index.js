var express = require("express");
var router = express.Router();
const Article = require("../models/article");

//  GET HOMEPAGE


router.get("/", async (req, res, next) => {
  let articles = await Article.find().sort({ date: "desc" });
  res.render("index", { articles: articles });
});

router.get("/user", async (req, res, next) => {
  console.log("I'm in get user");
  // const connectedUser = await UserModel.findOne();
  res.render("user");
});

// CITY ROUTERS

// New Delhi 
router.get("/new-delhi", async (req, res, next) => {
  let articles = await Article.find().sort({ date: "desc" });
  res.render("cities/new-delhi", { articles: articles });
});

// Kolkata
router.get("/kolkata", (req, res, next) => {
  res.render("cities/kolkata");
});

// Kochi
router.get("/kochi", (req, res, next) => {
  res.render("cities/kochi");
});

// Jaipur
router.get("/jaipur", (req, res, next) => {
  res.render("cities/jaipur");
});


router.get("/all", async (req, res, next) => {
  let articles = await Article.find().sort({ date: "desc" });
  res.render("all", { articles: articles });
});

// NECESSARY FOR NEW 

router.get("/articles/new", (req, res, next) => {
  res.render("new");
});

// EDIT SECOND VERSION
router.get('/articles/:id/edit', (req, res) => {
  console.log("I am in router.GET edit");
  const { id } =  req.params;
 
  Article.findById(id)
    .then(articleToEdit => {
      console.log(articleToEdit);
      res.render("edit", {article: articleToEdit})
    })
    .catch(error => next(error));
});

router.post('/articles/:id/edit', (req, res) => {
  console.log("I am in router.POST edit");
  const { id } = req.params;
  const { title, markdown, image, city } = req.body;
 
  Article.findByIdAndUpdate(id, { title, markdown, image, city }, { new: true })
    .then(updatedArticle => res.redirect(`/articles/${updatedArticle.id}`))
    .catch(error => next(error));
});



// OTHER PAGES

// router.get("/all", (req, res, next) => {
//   res.render("all");
// });

router.get("/about", (req, res, next) => {
  console.log("I'm in about route");
  res.render("about");
});

router.get("/signup", (req, res, next) => {  
  console.log("I'm in login route");
  res.render("signup");
});


module.exports = router;
