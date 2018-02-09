const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const router= require ('./routes/router')
const movieRouter = require('./routes/movieRouter')
const searchRouter = require('./routes/searchRouter')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', router)
app.use('/search/', searchRouter)
app.use('/movie/', movieRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
    console.log(`Press 'ctrl + c' or 'cmd + c' to stop server`)
})