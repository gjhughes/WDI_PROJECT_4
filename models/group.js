const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  prediction: { type: Number}
});

const momentSchema = new mongoose.Schema(
  {
    endTime: { type: Date },
    lastBetTime: { type: Date },
    endPrice: { type: Number },
    bets: [ betSchema ]
  }
);

const groupSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    groupName: { type: String, required: true },
    image: { type: String },
    members: [{
      user: { type: mongoose.Schema.ObjectId, ref: 'User' },
      points: { type: Number }
    }],
    moments: [momentSchema]
  }
);

module.exports = mongoose.model('Group', groupSchema);
