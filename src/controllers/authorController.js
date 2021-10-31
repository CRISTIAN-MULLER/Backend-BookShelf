const author = require('../models/Author');

exports.createAuthor = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const Author = new author({
    authorName: req.body.authorName,
    alias: req.body.alias,
    birthdDay: req.body.birthdDay,
    birthState: req.body.birthState,
    country: req.body.country,
    nationalities: req.body.nationalities,
  });

  Author.save()
    .then((data) => {
      res.status(200).send({ message: 'Salvei', data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim' });
    });
};

exports.findAuthors = (req, res) => {
  author
    .find()
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

  author
    .findByIdAndUpdate(authorId, req.body)

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

  author
    .findByIdAndDelete(authorId)

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
