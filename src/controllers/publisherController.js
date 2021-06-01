const Publisher = require('../models/publisher');

exports.createPublisher = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const publisher = new Publisher({
    name: req.body.name,
    country: req.body.country,
    foundation: req.body.foundation,
  });

  publisher
    .save()
    .then((data) => {
      res.status(200).send({ message: 'Salvei', data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Deu ruim' });
    });
};

exports.findPublishers = (req, res) => {
  Publisher.find()
    .then((publishers) => {
      res.send(publishers);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: err.message || 'Deu ruim so pegar as editoras' });
    });
};

exports.updatePublisher = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const publisherId = req.body._id;

  Publisher.findByIdAndUpdate(publisherId, req.body)

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

exports.deletePublisher = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'é obrigatorio body' });
    return;
  }

  const publisherId = req.body._id;

  console.log(publisherId);

  Publisher.findByIdAndDelete(publisherId)

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
