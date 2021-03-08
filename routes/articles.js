const express = require('express')
const router = express.Router()
const Article = require('./../models/article.hbs')


router.get('/:id', async (req, res, next) => {
    let article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
res.render('articles/show', {article: article})

})

router.post('/', async (req, res, next) => {
let article = new Article({
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