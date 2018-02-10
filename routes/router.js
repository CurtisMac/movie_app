const express = require('express')
const api = require('../functions/api')
const router = express.Router()

router.get('/', (req, res) => {
    api.getMovies((moviesObj) => {
        res.render('index', {
            movies: moviesObj
        })
    })
})

module.exports = router