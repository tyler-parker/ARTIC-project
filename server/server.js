const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

// app.use('/collections', require('./routes/collections'))

app.get('/', (req, res) => {
    res.send('Server started')
})
app.listen(9000, () => {
    console.log('The server is running on port 9000');
})