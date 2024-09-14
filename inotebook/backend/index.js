const connectToMongo = require('./db');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

connectToMongo();

const port = 5000

app.use(express.json())
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})