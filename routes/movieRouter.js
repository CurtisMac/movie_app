const express = require('express')
const movies = require('../functions/movies')
const movieRouter = express.Router()

movieRouter.get('/:movieId', (req, res) => {
    let movieId = req.params.movieId
    let movie = movies.find((obj) => {
        if (obj.id == movieId) { return obj }
    })
    res.render('movie', {
        movie,
    })
})

module.exports = movieRouter