const request = require('request')
const url = 'https://api.themoviedb.org/3/discover/movie?api_key=1eb7ae5fe70ccaa91530537bdf3dc0ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

module.exports = {
    getMovies: function (callback) {
        request(url, (err, res, body) => {
            if (!err) {
                let data = JSON.parse(body)
                let moviesObj = data.results
                callback(moviesObj)
            } else {
                console.log(`there was an error ${err}`)
            }
        })
    },

    getMovie: function (movieId, callback) {
        request(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1eb7ae5fe70ccaa91530537bdf3dc0ea`, (err, res, body) => {
            if (!err) {
                let data = JSON.parse(body)
                let movie = data
                callback(movie)
            } else {
                console.log(`there was an error ${err}`)
            }
        })
    }
}
