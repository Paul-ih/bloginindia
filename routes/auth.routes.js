// routes/auth.routes.js

const express = require("express");
const router = new express.Router();
// const bcryptjs = require("bcryptjs");
// const saltRounds = 10;
const UserModel = require("../models/User.model.js");

// .get() route ==> to display the signup form to users
router.get("/signup", (req, res) => {
  console.log("I'm in get signup");
  res.render("signup");
});

// .post() route ==> to process form data

// router.post('/signup', (req, res, next) => {
//     console.log('The form data: ', req.body);
//     const { username, email, password } = req.body;
//     bcryptjs
//       .genSalt(saltRounds)
//       .then(salt => bcryptjs.hash(password, salt))
//       .then(hashedPassword => {
//         console.log(`Password hash: ${hashedPassword}`);
//         // req.flash('Success');
//         res.redirect('/')
//       })
//       .catch(error => next(error));
//   });

// router.get("/user", async (req, res, next) => {
//   console.log("I'm in get user");
//   const connectedUser = await UserModel.findOne();
//   res.render("user", { connectedUser });
// });

router.get("/", async (req, res, next) => {
  const articles = await Article.find().sort({ date: "desc" });
  res.render("index", { articles: articles });
});

router.post("/signup", async (req, res, next) => {
  const newUser = { ...req.body };
  //handle if there is a user already existing
  try {
    await UserModel.create(newUser);
    console.log("I'm in signup post");
    console.log(newUser);
    res.render("user", { newUser});
  } catch (err) {
    next(err);
  }
});

module.exports = router;
