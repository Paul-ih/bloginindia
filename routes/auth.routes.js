// routes/auth.routes.js

const { Router } = require('express');
const router = new Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const UserModel = require("../models/User.Model");

// .get() route ==> to display the signup form to users
router.get('/signup', (req, res) => res.render('signup'));

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

  router.post("/signup", async (req, res, next) => {
    const newUser = { ...req.body };
    //handle if there is a user already existing
    try {
      //handle the password
      await UserModel.create(newUser);
      res.redirect("/");
    } catch (err) {
      next(err);
    }
  });



module.exports = router;
