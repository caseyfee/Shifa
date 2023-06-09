const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  medicalHistorys: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MedicalHistory',
    },
  ],
});

const Patient = model('Patient', patientSchema);

module.exports = Patient;
