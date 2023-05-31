const { AuthenticationError } = require('apollo-server-express');
const { Patient, MedicalHistory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    patients: async () => {
      return Patient.find().populate('medicalHistorys');
    },
    patient: async (parent, { patientname }) => {
      return Patient.findOne({ patientname }).populate('medicalHistorys');
    },
    medicalHistorys: async (parent, { patientname }) => {
      const params = patientname ? { patientname } : {};
      return MedicalHistory.find(params).sort({ createdAt: -1 });
    },
    medicalHistory: async (parent, { medicalHistoryId }) => {
      return MedicalHistory.findOne({ _id: medicalHistoryId });
    },
  },

  Mutation: {
    addPatient: async (parent, { patientname, email, password }) => {
      const patient = await Patient.create({ patientname, email, password });
      const token = signToken(patient);
      return { token, patient };
    },
    login: async (parent, { email, password }) => {
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
    addMedicalHistory: async (parent, { medicalHistoryText, medicalHistoryAuthor }) => {
      const medicalHistory = await MedicalHistory.create({ medicalHistoryText, medicalHistoryAuthor });

      await Patient.findOneAndUpdate(
        { patientname: medicalHistoryAuthor },
        { $addToSet: { medicalHistorys: medicalHistory._id } }
      );
        console.log("----- \n", medicalHistory);
      return medicalHistory;
    },
    addComment: async (parent, { medicalHistoryId, commentText, commentAuthor }) => {
      return MedicalHistory.findOneAndUpdate(
        { _id: medicalHistoryId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeMedicalHistory: async (parent, { medicalHistoryId }) => {
      return MedicalHistory.findOneAndDelete({ _id: medicalHistoryId });
    },
    removeComment: async (parent, { medicalHistoryId, commentId }) => {
      return MedicalHistory.findOneAndUpdate(
        { _id: medicalHistoryId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
