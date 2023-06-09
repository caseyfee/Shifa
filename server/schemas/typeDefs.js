const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    firstName: String
    lastName: String
    email: String
    fullName: String
  }

  type Patient {
    user: User
    medicalHistorys: [MedicalHistory]
    # userHistorys: [UserHistory]
  }

type MedicalHistory {
  _id: ID
  gender: String
  age: String
  dob: String
  medicalHistoryText: String
  symptomOne: Boolean
  symptomTwo: Boolean
  symptomThree: Boolean
  symptomFour: Boolean
  symptomFive: Boolean
  symptomSix: Boolean
  symptomSeven: Boolean
  symptomEight: Boolean
  symptomNine: Boolean
  symptomTen: Boolean
  symptomEleven: Boolean
  symptomTwelve: Boolean
  createdAt: String
  comments: [Comment]
}

input UserCredentials{
    firstName: String
    lastName: String
    email: String
    password: String
}

input MedicalHistoryInput {
 patientID: ID
  gender: String
  age: String
  dob: String
  medicalHistoryText: String
  symptomOne: Boolean
  symptomTwo: Boolean
  symptomThree: Boolean
  symptomFour: Boolean
  symptomFive: Boolean
  symptomSix: Boolean
  symptomSeven: Boolean
  symptomEight: Boolean
  symptomNine: Boolean
  symptomTen: Boolean
  symptomEleven: Boolean
  symptomTwelve: Boolean
}


  type Comment {
    _id: ID
    commentText: String
    commentAuthor: User
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    patients: [Patient]
    patient(patientId: ID!): Patient
    medicalHistorys(patientId: ID!): [MedicalHistory]
    medicalHistory(medicalHistoryId: ID!): MedicalHistory
  }

  type Mutation {
    addPatient(credentials:UserCredentials!): Auth
    login(email: String!, password: String!): Auth
    addMedicalHistory(medicalHistory: MedicalHistoryInput!): MedicalHistory
    addComment(
      medicalHistoryId: ID!
      commentText: String!
      commentAuthor: ID
    ): MedicalHistory
    removeMedicalHistory(medicalHistoryId: ID!): MedicalHistory
    removeComment(medicalHistoryId: ID!, commentId: ID!): MedicalHistory
  }
`;

module.exports = typeDefs;
