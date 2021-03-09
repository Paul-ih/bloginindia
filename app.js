const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');
const hbs = require("hbs");
hbs.registerPartials(path.join(__dirname, "views/partials"));


// Mongoose Connect
mongoose.connect("mongodb://localhost/bloginindia", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



router.get("/all", async (req, res, next) => {
  const articles = await Article.find().sort({date: 'desc'})
  res.render("all", { articles: articles });
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());  
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PATHS
app.use('/', indexRouter);

app.use('/users', usersRouter);

// Articles router 

app.use('/articles', articleRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
