const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Doctor {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    patients: [Patient]!
  }

  type Patient {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    height: Number
    weight: Number
    illness: String
    doctors: [Doctor]!
    drnotes: [DrNote]!
  }

  type DrNote {
    _id: ID
    noteText: String
    noteAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    doctor: Doctor
  }


# CHECK WITH OUR GROUP WHAT EXACTLY NEED TO QUERY:
  type Query {
    doctors: [Doctor]
    doctor(username: String!): Doctor
    patients(username: String): [Patient]
    patient(patientId: ID!): Patient
  }

  type Mutation {
    addDoctor(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPatient(patientText: String!, patientAuthor: String!): Patient
    addDrNote(
      patientId: ID!
      drnoteText: String!
      drnoteAuthor: String!
    ): Patient
    removePatient(patientId: ID!): Patient
    removeDrNote(patientId: ID!, drnoteId: ID!): Patient
  }
`;

module.exports = typeDefs;
