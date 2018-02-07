const express = require('express')
const app = express()
const port = process.argv[2] || 8080

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        movies: getMovies(),
    })
})

app.get('/movie/:movieId', (req, res)=>{
    res.send(req.params.movieId)
})

function getMovies() {
    return [{
        id: 1,
        title: 'Blade Runner',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        id: 2,
        title: 'A Movie',
        year: '1999',
        rated: 'S',
        released: '25 June 1982',
        runtime: '1h 57min',
        genre: 'Boring, Thriller',
        director: 'Needs Help',
        writer: 'Bad Writer 1, Bad Writer 2',
        actors: 'Cannot Act 1, Cannot Act 2',
        plot: 'A long boring movie where the viewer is kept in suspense wondering if anything will ever happen',
        language: 'English',
        country: 'USA'
    }
    ]
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Press 'ctrl + c' or 'cmd + c' to stop server`)
})