const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new Schema({
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
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Patient',
    },
  ],
});

doctorSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

doctorSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Doctor = model('Doctor', doctorSchema);

module.exports = Doctor;
