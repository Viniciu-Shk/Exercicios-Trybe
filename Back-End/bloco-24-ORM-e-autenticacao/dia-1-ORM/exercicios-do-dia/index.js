require('dotenv').config();
const express = require('express');
const booksController = require('./src/controllers/booksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', booksController.getAll);

app.get('/books/:id', booksController.getById);

app.post('/books', booksController.createBook);

app.put('/books/:id', booksController.update);

app.delete('/books/:id', booksController.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));