const { Schema, model } = require('mongoose');

const userHistorySchema = new Schema({
    firstName: {
        type: String,
        required: 'You need to leave a first name!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    lastName: {
        type: String,
        required: 'You need to leave a first name!',
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
        required: 'You need to leave a first name!',
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
});

const UserHistory = model('UserHistory', userHistorySchema);

module.exports = UserHistory;
