//DB PostgreSQL
const pool = require('../db');

const createBook = async (req, res, next) => {
    try{
        const { id, title, author } = req.body;
        await pool.query('INSERT INTO books (id, title, author) VALUES ($1, $2, $3)', [id, title, author]);
        res.json({ id, title, author});
        next()
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

const getBooks = async (req, res, next) => {
    try {
        const books = await pool.query('SELECT * FROM books');
        res.json(books.rows);
        next()
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getBooks,
    createBook,
}