const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId , ref: 'User', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    startPrice: { type: Number, required: true },
    endPrice: { type: Number, required: true },
    wager: { type: Number, required: true }
  },{
    timestamps: true
  }
);

transactionSchema.methods.belongsTo = function transactionSchema(user) {
  if(typeof this.user.id === 'string') return this.user.id === user.id;
  return user.id === this.user.toString();
};

module.exports = mongoose.model('Transaction', transactionSchema);
