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
  gender: {
    type: String,
    trim: true,
  },
  age: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
    trim: true,
  },
  symptomOne: {
    type: Boolean,
  },
  symptomTwo: {
    type: Boolean,
  },
  symptomThree: {
    type: Boolean,
  },
  symptomFour: {
    type: Boolean,
  },
  symptomFive: {
    type: Boolean,
  },
  symptomSix: {
    type: Boolean,
  },
  symptomSeven: {
    type: Boolean,
  },
  symptomEight: {
    type: Boolean,
  },
  symptomNine: {
    type: Boolean,
  },
  symptomTen: {
    type: Boolean,
  },
  symptomEleven: {
    type: Boolean,
  },
  symptomTwelve: {
    type: Boolean,
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
        type: Schema.Types.ObjectId,
        ref:"User",
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
