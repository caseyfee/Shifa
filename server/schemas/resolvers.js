const { AuthenticationError } = require('apollo-server-express');
const { User, MedicalHistory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('medicalHistorys');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('medicalHistorys');
    },
    medicalHistorys: async (parent, { username }) => {
      const params = username ? { username } : {};
      return MedicalHistory.find(params).sort({ createdAt: -1 });
    },
    medicalHistory: async (parent, { medicalHistoryId }) => {
      return MedicalHistory.findOne({ _id: medicalHistoryId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMedicalHistory: async (parent, { medicalHistoryText, medicalHistoryAuthor }) => {
      const medicalHistory = await MedicalHistory.create({ medicalHistoryText, medicalHistoryAuthor });

      await User.findOneAndUpdate(
        { username: medicalHistoryAuthor },
        { $addToSet: { medicalHistorys: medicalHistory._id } }
      );
        console.log("----- \n", medicalHistory);
      return medicalHistory;
    },
    addDrNote: async (parent, { medicalHistoryId, drNoteText, drNoteAuthor }) => {
      return MedicalHistory.findOneAndUpdate(
        { _id: medicalHistoryId },
        {
          $addToSet: { drNotes: { drNoteText, drNoteAuthor } },
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
    removeDrNote: async (parent, { medicalHistoryId, drNoteId }) => {
      return MedicalHistory.findOneAndUpdate(
        { _id: medicalHistoryId },
        { $pull: { drNotes: { _id: drNoteId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
