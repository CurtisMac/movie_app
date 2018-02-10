const express = require('express')
const api = require('../functions/api')
const searchRouter = express.Router()

searchRouter.get('/', (req, res) => {
    let { searchTerm } = req.query
    api.searchMovies(searchTerm, (results) => {
        res.render('index', {
            movies: results
        })
    })
})

module.exports = searchRouter