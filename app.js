require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const articleRouter = require("./routes/articles");
const authRouter = require("./routes/auth.routes");
const mongoose = require("mongoose");
const hbs = require("hbs");
const path = require("path");
const cookieParser = require("cookie-parser");
const exposeLoginStatus = require("./Middlewares/exposeLoginStatus")
const logger = require("morgan");
const app = express();


// Routes middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
require('./config/session.config')(app);


hbs.registerPartials(path.join(__dirname, "views/partials"));
console.log("Hello world");
console.log("Hello people");
// Mongoose Connect
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("yay connected to the db"))
  .catch((err) => console.log(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(exposeLoginStatus);
app.use((req,res,next) => {
  console.log(req.session)
  next();
})



// ROUTES
app.use("/", indexRouter); // toto.fr/
app.use("/", authRouter); // toto.fr/
app.use("/users", usersRouter); // toto.fr/users/
app.use("/articles", articleRouter); // toto.fr/articles/

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
