const express = require('express')
const router = express.Router()
const Article = require('./../models/article.hbs')

router.get('/new', (req, res, next) => {
res.render('articles/new')
})

router.get('/:id', (req, res, next) => {

}
)

router.post('/', async (req, res, next) => {
const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
    date: req.body.date,
    image: req.body.image,
})
try {
article = await article.save
res.redirect(`/articles/${article.id}`)
} catch(err) {
res.render('articles/new', {article : article})
}
})


module.exports = router