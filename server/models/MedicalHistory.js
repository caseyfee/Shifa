const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const medicalHistorySchema = new Schema({

firstName: {
  type: String,
  required: true,
},
lastName: {
  type: String,
  required: true,
},
age: Number,
dob: {
  type: String,
  required: true,
},
// symptoms: {
// type: Boolean
// },
other: {
  type: String,
  minlength: 1,
  maxlength: 280,
  trim: true
},
drNote: [
    {
      drNoteText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      drNoteAuthor: {
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
