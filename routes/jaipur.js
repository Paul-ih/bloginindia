const express = require("express");
const router = express.Router();

router.get("/jaipur", (req, res, next) => {
    res.render("jaipur");
  });

module.exports = router;