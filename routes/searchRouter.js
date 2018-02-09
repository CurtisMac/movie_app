const express = require('express')
const movies = require('../functions/movies')
const searchRouter = express.Router()

searchRouter.get('/', (req, res) => {
    let { searchTerm } = req.query
    let movies = 0
    console.log(searchTerm)
    res.send(searchTerm)
    // res.render('index', {movies})
})

module.exports = searchRouter