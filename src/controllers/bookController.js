const Book = require('../models/book');

exports.createBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const book = new Book({
    title: req.body.title,
    author: req.body.authorId,
    publisher: req.body.publisher,
  });

  book
    .save()
    .then((data) => {
      res.status(200).send({ message: 'Salvei', data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim' });
    });
};

exports.findBooks = (req, res) => {
  Book.find()
    .then((books) => {
      res.send(books);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Deu ruim so pegar os livros' });
    });
};

exports.updateBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const bookId = req.body._id;

  Book.findByIdAndUpdate(bookId, req.body)

    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Deu ruim na alteração' });
      }

      res.status(200).send({ message: 'Alterei', data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim na alteração' });
    });
};

exports.deleteBook = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const bookId = req.body._id;

  console.log(bookId);

  Book.findByIdAndDelete(bookId)

    .then((data) => {
      if (!data) {
        res.status(404).send({ message: 'Deu ruim na exclusão' });
      } else {
        res.status(200).send({ message: 'Deletei' });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim na exclusão' });
    });
};
