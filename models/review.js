const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
}, {timestamps:true});

module.exports = mongoose.model('Review', reviewSchema);