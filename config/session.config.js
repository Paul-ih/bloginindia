const session = require('express-session');





// SHOULD BE IN APP.JS ?
// REF: https://my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202102_PAR/units/ironhack-course-chapter_5-sequential_2-vertical_4

module.exports = app => {  
    // <== app is just a placeholder here
    // but will become a real "app" in the app.js
    // when this file gets imported/required there
   
    // use session
    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {
          sameSite: 'none',
          httpOnly: true,
          maxAge: 24* 60* 60 * 1000 // 60 * 1000 ms === 1 min
        }
      })
    );
  };