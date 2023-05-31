const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Patient {
    _id: ID
    patientname: String
    email: String
    password: String
    medicalHistorys: [MedicalHistory]
  }

  type MedicalHistory {
    _id: ID
    medicalHistoryText: String
    medicalHistoryAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    patient: Patient
  }

  type Query {
    patients: [Patient]
    patient(patientname: String!): Patient
    medicalHistorys(patientname: String): [MedicalHistory]
    medicalHistory(medicalHistoryId: ID!): MedicalHistory
  }

  type Mutation {
    addPatient(patientname: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMedicalHistory(medicalHistoryText: String!, medicalHistoryAuthor: String!): MedicalHistory
    addComment(
      medicalHistoryId: ID!
      commentText: String!
      commentAuthor: String!
    ): MedicalHistory
    removeMedicalHistory(medicalHistoryId: ID!): MedicalHistory
    removeComment(medicalHistoryId: ID!, commentId: ID!): MedicalHistory
  }
`;

module.exports = typeDefs;
