const express = require('express')
const router = express.Router()

  router.get('/paul', (req, res, next) => {
      res.send('paul')
      })

module.exports = router

