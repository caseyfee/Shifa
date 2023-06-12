const { AuthenticationError } = require('apollo-server-express');
const { Patient, MedicalHistory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {

    patients: async () => {
      return Patient.find().populate('medicalHistorys');
    },

    patient: async (_, { patientId }) => {
      return Patient.findById(patientId).populate('medicalHistorys');
    },

    // medicalHistorys: async (_, { patient }) => {
    medicalHistorys: async (_, patientId) => {
      const params = patientId ? { patientId } : {};
      // return MedicalHistory.find(params).sort({ createdAt: -1 });
      // const params = patient ? { patient } : {};
      return MedicalHistory.findById(params).sort({ createdAt: -1 });
    },

    // medicalHistory: async (_, { medicalHistoryId }) => {
    //   return MedicalHistory.findOne({ _id: medicalHistoryId });
    // },
    medicalHistory: async (_, { medicalHistoryId }) => {
      return MedicalHistory.findOneById(medicalHistoryId);
    },
  },

  Mutation: {

    addPatient: async (parent, { firstName, lastName, email, password }) => {
      const patient = await Patient.create({ firstName, lastName, email, password });
      const token = signToken(patient);
      return { token, patient };
    },

    login: async (_, { email, password }) => {
      const patient = await Patient.findOne({ email });

      if (!patient) {
        throw new AuthenticationError('No patient found with this email address');
      }

      const correctPw = await patient.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(patient);

      return { token, patient };
    },

    addMedicalHistory: async (_, {
      medicalHistoryText, gender, age, dob, symptomOne, symptomTwo, symptomThree, symptomFour, symptomFive, symptomSix, symptomSeven, symptomEight, symptomNine, symptomTen, symptomEleven, symptomTwelve 
    }) => {
      const medicalHistory = await MedicalHistory.create({ 
        medicalHistoryText, gender, age, dob, symptomOne, symptomTwo, symptomThree, symptomFour, symptomFive, symptomSix, symptomSeven, symptomEight, symptomNine, symptomTen, symptomEleven, symptomTwelve
      });
      await Patient.findById(
         {_id: id} ,
        { $addToSet: { medicalHistorys: medicalHistory._id } }
      );
      console.log("----- \n", medicalHistory);
      return medicalHistory;
    },



    // addComment: async (parent, { medicalHistoryId, commentText, commentAuthor }) => {
    //   return MedicalHistory.findOneAndUpdate(
    //     { _id: medicalHistoryId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    // removeMedicalHistory: async (parent, { medicalHistoryId }) => {
    //   return MedicalHistory.findOneAndDelete({ _id: medicalHistoryId });
    // },
    // removeComment: async (parent, { medicalHistoryId, commentId }) => {
    //   return MedicalHistory.findOneAndUpdate(
    //     { _id: medicalHistoryId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
