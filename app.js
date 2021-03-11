require("dotenv").config();
const createError = require("http-errors");
const express = require("express");

const path = require("path");
const cookieParser = require("cookie-parser");
const exposeLoginStatus = require("./Middlewares/exposeLoginStatus")
const logger = require("morgan");
const app = express();

require('./config/session.config')(app);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const paulRouter = require("./routes/about");
const articleRouter = require("./routes/articles");
const authRouter = require("./routes/auth.routes");
const mongoose = require("mongoose");
const hbs = require("hbs");
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

// Routes middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/users", usersRouter);
app.use("/articles", articleRouter);
app.use("/paul", paulRouter);

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
