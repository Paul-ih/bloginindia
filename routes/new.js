const express = require('express')
const router = express.Router()

router.get('/articles/new', (req, res) => {
res.render('articles/new')
})

router.post('/', (req, res) => {


})


module.exports = router