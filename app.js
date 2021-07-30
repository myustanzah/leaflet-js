const express = require('express')
const app = express()
const port = 3000
const route = require('./route/route')
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(route)

app.listen(port, () => {
    console.log(`App berjalan di port:`, port);
})