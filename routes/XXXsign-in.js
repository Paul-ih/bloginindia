const express = require("express");
const router = express.Router();

router.get("/sign-in", (req, res, next) => {
    res.render("/sign-in");
  });

module.exports = router;


