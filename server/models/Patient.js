const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new Schema({
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User"
  // },

  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 1,
    maxlength: 280,
    required: true,
    trim: true,
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
  medicalHistorys: [
    {
      type: Schema.Types.ObjectId,
      ref: 'MedicalHistory',
    },
  ],
},
  // {
  //   toJSON: {
  //       virtuals: true
  //   }
  // }
);

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

// Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
//     .virtual('fullName')
// Getter
//     .get(function () {
//         return `${this.firstName} ${this.lastName}`;
//     })
// Setter to set the first and last name
//     .set(function (v) {
//         const firstName = v.split(' ')[0];
//         const lastName = v.split(' ')[1];
//         this.set({ firstName, lastName });
//     });


const Patient = model('Patient', patientSchema);

module.exports = Patient;
