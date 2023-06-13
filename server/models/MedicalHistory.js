const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const medicalHistorySchema = new Schema({

  medicalHistoryText: {
    type: String,
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

  // comments: [
  //   {
  //     commentText: {
  //       type: String,
  //       required: true,
  //       minlength: 1,
  //       maxlength: 280,
  //     },
  //     commentAuthor: {
  // if we need this we need to figure out which one to use:
  // type: Schema.Types.ObjectId,
  // ref:"user",
  // or
  // type: String,

  //       required: true,
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: Date.now,
  //       get: (timestamp) => dateFormat(timestamp),
  //     },
  //   },
  // ],

});

const MedicalHistory = model('MedicalHistory', medicalHistorySchema);

module.exports = MedicalHistory;
