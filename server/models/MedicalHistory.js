const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const medicalHistorySchema = new Schema({
  medicalHistoryText: {
    type: String,
    required: 'You need to leave a medicalHistory!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  medicalHistoryAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const MedicalHistory = model('MedicalHistory', medicalHistorySchema);

module.exports = MedicalHistory;
