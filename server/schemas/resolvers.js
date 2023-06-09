const { AuthenticationError } = require('apollo-server-express');
const { Patient, MedicalHistory} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    patients: async () => {
      return Patient.find().populate('medicalHistorys').populate("user");
    },
    patient: async (parent, { patientId }) => {
      return Patient.findById( patientId).populate('medicalHistorys').populate("user");
    },
    medicalHistorys: async (parent, { patient }) => {
      const params = patient ? { patient} : {};
      return MedicalHistory.find(params).sort({ createdAt: -1 });
    },
    medicalHistory: async (parent, { medicalHistoryId }) => {
      return MedicalHistory.findOne({ _id: medicalHistoryId });
    },
    // userHistorys: async (parent, { patientname }) => {
    //   const params = patientname ? { patientname } : {};
    //   return UserHistory.find(params).sort({ createdAt: -1 });
    // },
    // userHistory: async (parent, { userHistoryId }) => {
    //   return UserHistory.findOne({ _id: userHistoryId });
    // },
  },
    Mutation: {
      addPatient: async (parent, {credentials}) => {
        const patient = await Patient.create(credentials);
        const token = signToken(patient);
        return { token, user:patient };
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

      // addUserHistory: async (parent, { userHistory }) => {
      //   const medicalHistory = await UserHistory.create({ ...userHistory });

      //   await Patient.findOneAndUpdate(
      //     // { patientname: firstName },
      //     { $addToSet: { userHistorys: medicalHistory._id } }
      //   );
      //   console.log("----- \n", medicalHistory);
      //   return medicalHistory;
      // },

      // addUserHistory: async (parent, { userHistory }) => {
      //   const createdUserHistory = await UserHistory.create({ ...userHistory });
      //   const patient = await Patient.findOne({ patientname: userHistory.patientname });
  
      //   if (!patient) {
      //     throw new AuthenticationError('No patient found with this patient name');
      //   }
  
      //   patient.userHistorys.push(createdUserHistory);
      //   await patient.save();
  
      //   console.log("----- \n", createdUserHistory);
      //   return createdUserHistory;
      // },

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
