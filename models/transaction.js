const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    finishTime: { type: Date, required: true },
    betCloseTime: { type: Date, required: true },
    predictions: [{
      user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
      predictedPrice: { type: Number, required: true }
    }]
  }
);


module.exports = mongoose.model('Transaction', transactionSchema);
