const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
},
username: {
    type: String,
    required: true,
    unique: true,
    // trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  height:{ 
   type: Number,
},
weight:{ 
    type: Number,
 },
 illness:{ 
    type: String,
 },
  drNotes: [
    {
      noteText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      noteAuthor: {
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

  
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  ],
});

patientSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

patientSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Patient = model('Patient', patientSchema);

module.exports = Patient;
