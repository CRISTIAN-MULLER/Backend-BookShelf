const Author = require('../models/author');

exports.createAuthor = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const author = new Author({
    name: req.body.name,
    country: req.body.country,
    age: req.body.age,
  });

  author
    .save()
    .then((data) => {
      res.status(200).send({ message: 'Salvei', data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim' });
    });
};

exports.findAuthors = (req, res) => {
  Author.find()
    .then((authors) => {
      res.send(authors);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Deu ruim so pegar as editoras' });
    });
};

exports.updateAuthor = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const authorId = req.body._id;

  Author.findByIdAndUpdate(authorId, req.body)

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

exports.deleteAuthor = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const authorId = req.body._id;

  console.log(authorId);

  Author.findByIdAndDelete(authorId)

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
