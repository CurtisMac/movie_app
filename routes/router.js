const express = require('express')
const movies = require('../functions/movies')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        movies,
    })
})

module.exports = router