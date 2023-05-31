import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query patient($patientname: String!) {
    patient(patientname: $patientname) {
      _id
      patientname
      email
      medicalHistorys {
        _id
        medicalHistoryText
        createdAt
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getMedicalHistorys {
    medicalHistorys {
      _id
      medicalHistoryText
      medicalHistoryAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleMedicalHistory($medicalHistoryId: ID!) {
    medicalHistory(medicalHistoryId: $medicalHistoryId) {
      _id
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
