// routes/auth.routes.js

const express = require("express");
const router = new express.Router();
// const bcryptjs = require("bcryptjs");
// const saltRounds = 10;
const UserModel = require("../models/User.model.js");

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
  console.log("newUser :");
  console.log(newUser);
  console.log('SESSION =====> ', req.session);
  UserModel.create(newUser)
  .then(function (userDocument) {
console.log("userDocument:");
req.session.currentUser = userDocument;
console.log(userDocument);
res.redirect("/")
  })
  .catch(function(error) {
    console.log(error);
  });
});
  
//   //handle if there is a user already existing
//   .then UserModel.create(newUser);
//     console.log("I'm in signup post");
//     console.log(newUser);
//     currentUser = newUser;
//     res.render("user", { newUser: newUser });
//   } catch (err) {
//     next(err);
//   }
// });





router.post("/users/:id/delete", async (req, res) => {
  console.log("I'm in user router.delete");
  const { id } = req.params;
  await UserModel.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => next(error));
});

module.exports = router;
