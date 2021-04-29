const express = require('express');
const connectDatabase = require('./src/database/connection.js');
const bookController = require('./src/controllers/bookController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('ta rodando');
});

connectDatabase();

// Create(Ta pronto), Retrieve(Ta pronto), Update (Ta Pronto) Delete (Ta Pronto),
// GET, POST, PUT, DELETE, PATCH,

app.get('/books', bookController.findBooks);
app.post('/book', bookController.createBook);
app.put('/book', bookController.updateBook);
app.delete('/book', bookController.deleteBook);
