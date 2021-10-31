const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  publisherName: { type: String, required: true },
  foundationYear: { type: Date, required: true },
  country: { type: String, required: true },
});

const Publisher = mongoose.model('publisher', publisherSchema);

module.exports = Publisher;
