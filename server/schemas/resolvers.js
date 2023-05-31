const { AuthenticationError } = require('apollo-server-express');
const { Doctor, Patient } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  
  // Query used to get
  Query: {
    doctors: async () => {
      return Doctor.find().populate('patients');
    },
    doctor: async (parent, { username }) => {
      return Doctor.findOne({ username }).populate('patients');
    },
    patients: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Patient.find(params).sort({ createdAt: -1 });
    },
    patient: async (parent, { patientId }) => {
      return Patient.findOne({ _id: patientId });
    },
  },

// Mutation which is the way to change data in GraphQL
  Mutation: {
    addDoctor: async (parent, { username, email, password }) => {
      const doctor = await Doctor.create({ username, email, password });
      const token = signToken(doctor);
      return { token, doctor };
    },
    login: async (parent, { email, password }) => {
      const doctor = await Doctor.findOne({ email });

      if (!doctor) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await doctor.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(doctor);

      return { token, doctor };
    },
    addPatient: async (parent, { patientText, patientAuthor }) => {
      const patient = await Patient.create({ patientText, patientAuthor });

      await Doctor.findOneAndUpdate(
        { username: patientAuthor },
        { $addToSet: { patients: patient._id } }
      );

      return patient;
    },
    addDrNote: async (parent, { patientId, drnoteText, drnoteAuthor }) => {
      return Patient.findOneAndUpdate(
        { _id: patientId },
        {
          $addToSet: { drnotes: { drnoteText, drnoteAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removePatient: async (parent, { patientId }) => {
      return Patient.findOneAndDelete({ _id: patientId });
    },
    removeDrNote: async (parent, { patientId, drnoteId }) => {
      return Patient.findOneAndUpdate(
        { _id: patientId },
        { $pull: { drnotes: { _id: drnoteId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
