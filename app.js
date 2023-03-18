'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const { createBook, getBooks } = require('./books/books');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/books', getBooks);

app.post('/create', createBook);
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})



