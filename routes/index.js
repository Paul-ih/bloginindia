var express = require("express");
var router = express.Router();
const Article = require("../models/article");

//  GET HOMEPAGE

// router.get("/", async (req, res, next) => {
//   // TOOK THIS OUT BUT WAS WORKING:
//   // let articles = await Article.find().sort({ date: "desc" });
//   let articles = await Article.find().limit(2);
//   res.render("index", { articles: articles });
// });

router.get("/", async (req, res, next) => {
  let delhiArticles = await Article.find({ city: "newdelhi"});
  let kolkataArticles = await Article.find({ city: "kolkata"});
  let kochiArticles = await Article.find({ city: "kochi"});
  let jaipurArticles = await Article.find({ city: "jaipur"});
  // TOOK THIS OUT BUT WAS WORKING:
  // let articles = await Article.find().sort({ date: “desc” });
  let articles = await Article.find().limit(2);
  res.render("index", { delhiArticles, kolkataArticles, kochiArticles, jaipurArticles  });
});


router.get("/user", async (req, res, next) => {
  console.log("I'm in get user");
  // const connectedUser = await UserModel.findOne();
  res.render("user");
});

// CITY ROUTERS

// New Delhi
router.get("/new-delhi", async (req, res, next) => {
  let articles = await Article.find({ city: "newdelhi" });
  res.render("cities/new-delhi", { articles: articles });
});

// Kolkata
router.get("/kolkata", async (req, res, next) => {
  let articles = await Article.find({ city: "kolkata" });
  res.render("cities/kolkata", { articles: articles });
});

// Kochi
router.get("/kochi", async (req, res, next) => {
  let articles = await Article.find({ city: "kochi" });
  res.render("cities/kochi", { articles: articles });
});

// Jaipur
router.get("/jaipur", async (req, res, next) => {
  let articles = await Article.find({ city: "jaipur" });
  res.render("cities/jaipur", { articles: articles });
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
router.get("/articles/:id/edit", (req, res) => {
  console.log("I am in router.GET edit");
  const { id } = req.params;

  Article.findById(id)
    .then((articleToEdit) => {
      console.log(articleToEdit);
      res.render("edit", { article: articleToEdit });
    })
    .catch((error) => next(error));
});

router.post("/articles/:id/edit", (req, res) => {
  console.log("I am in router.POST edit");
  const { id } = req.params;
  const { title, markdown, image, city } = req.body;

  Article.findByIdAndUpdate(id, { title, markdown, image, city }, { new: true })
    .then((updatedArticle) => res.redirect(`/articles/${updatedArticle.id}`))
    .catch((error) => next(error));
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
