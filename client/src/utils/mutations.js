import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      patient {
        _id
        patientname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addPatient($patientname: String!, $email: String!, $password: String!) {
    addPatient(patientname: $patientname, email: $email, password: $password) {
      token
      patient {
        _id
        patientname
      }
    }
  }
`;

export const ADD_MEDICALHIST = gql`
  mutation addMedicalHistory($medicalHistoryText: String!, $medicalHistoryAuthor: String!) {
    addMedicalHistory(medicalHistoryText: $medicalHistoryText, medicalHistoryAuthor: $medicalHistoryAuthor) {
      _id
      firstName
      medicalHistoryText
      medicalHistoryAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $medicalHistoryId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      medicalHistoryId: $medicalHistoryId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      firstName
      medicalHistoryText
      medicalHistoryAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
