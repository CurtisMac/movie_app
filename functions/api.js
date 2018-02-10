const request = require('request')
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1eb7ae5fe70ccaa91530537bdf3dc0ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

module.exports = {
    getMovies: function (renderMovies) {
        request(url, (err, res, body) => {
            if (!err) {
                let data = JSON.parse(body)
                let moviesObj = data.results
                renderMovies(moviesObj)
            } else {
                console.log(`there was an error ${err}`)
            }
        })
    },

    getMovie: function (movieId, renderMovie) {
        request(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1eb7ae5fe70ccaa91530537bdf3dc0ea`, (err, res, body) => {
            if (!err) {
                let movie = JSON.parse(body)
                renderMovie(movie)
            } else {
                console.log(`there was an error ${err}`)
            }
        })
    },

    searchMovies: function (searchTerm, renderResults) {
        request(`https://api.themoviedb.org/3/search/movie?api_key=1eb7ae5fe70ccaa91530537bdf3dc0ea&query=${searchTerm}`, (err, res, body) => {
            if (!err) {
                let data =  JSON.parse(body)
                let results = data.results
                renderResults(results)
            } else {
                console.log(`there was an error ${err}`)
            }
        })
    }
}
