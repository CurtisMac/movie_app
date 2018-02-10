const express = require('express')
const api = require('../functions/api')
const movieRouter = express.Router()

movieRouter.get('/:movieId', (req, res) => {
    let movieId = req.params.movieId
    api.getMovie(movieId, (movie) => {
        res.render('movie', {
            movie,
        })
    })
})

module.exports = movieRouter