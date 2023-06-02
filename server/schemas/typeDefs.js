const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    doctor: Boolean
    medicalHistorys: [MedicalHistory]
  }

  type MedicalHistory {
    _id: ID
    firstName: String
    lastName: String
    age: Number
    dob: String
    # symptoms: Boolean
    other: String
    drNotes: [DrNote]
  }

  type DrNote {
    _id: ID
    drNoteText: String
    drNoteAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    medicalHistorys(username: String): [MedicalHistory]
    medicalHistory(medicalHistoryId: ID!): MedicalHistory
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMedicalHistory(medicalHistoryText: String!, medicalHistoryAuthor: String!): MedicalHistory
    addDrNote(
      medicalHistoryId: ID!
      drNoteText: String!
      drNoteAuthor: String!
    ): MedicalHistory
    removeMedicalHistory(medicalHistoryId: ID!): MedicalHistory
    removeDrNote(medicalHistoryId: ID!, drNoteId: ID!): MedicalHistory
  }
`;

module.exports = typeDefs;
