// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new Schema({
//     firstName: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//         trim: true,
//     },
//     lastName: {
//         type: String,
//         minlength: 1,
//         maxlength: 280,
//         required: true,
//         trim: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/.+@.+\..+/, 'Must match an email address!'],
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 5,
//     }
// },
//     {
//         toJSON: {
//             virtuals: true
//         }
//     });

// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });


// // Create a virtual property `fullName` that gets and sets the user's full name
// userSchema
//     .virtual('fullName')
//     // Getter
//     .get(function () {
//         return `${this.firstName} ${this.lastName}`;
//     })
//     // Setter to set the first and last name
//     .set(function (v) {
//         const firstName = v.split(' ')[0];
//         const lastName = v.split(' ')[1];
//         this.set({ firstName, lastName });
//     });

// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

// const User = model("User", userSchema);
// module.exports = User;