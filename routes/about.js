const express = require('express')
const router = express.Router()
const about = require('./../models/about.hbs')

router.get('/about', (req, res, next) => {
    res.render('about')
    })

module.exports = router

