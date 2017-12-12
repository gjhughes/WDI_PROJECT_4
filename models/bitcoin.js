const mongoose = require('mongoose');

const bitcoinSchema = new mongoose.Schema(
  {
    time: { type: Date, required: true },
    price: { type: Number, required: true }
  }
);

module.exports = mongoose.model('Bitcoin', bitcoinSchema);
