const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.use(express.json())
app.use('/api/auth', require('./auth.js'))
app.use('/api/notes', require('./notes.js'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})