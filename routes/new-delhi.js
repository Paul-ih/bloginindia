const express = require("express");
const router = express.Router();

router.get("/new-delhi", (req, res, next) => {
    res.render("new-delhi");
  });

module.exports = router;