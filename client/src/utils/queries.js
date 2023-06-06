import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query patient($patientname: String!) {
    patient(patientname: $patientname) {
      _id
      patientname
      email
      userHistorys {
        {...UserHistory}
      }
      medicalHistorys {
        _id
        medicalHistoryText
        createdAt
      }
    }
  }
`;

export const Query_USERHISTORIES = gql`
query getUserHistorys {
  userHistorys {
    _id
    firstName
    lastName
    gender
    age
    dob
    symptomOne
    symptomTwo
    symptomThree
    symptomFour
    symptomFive
    symptomSix
    symptomSeven
    symptomEight
    symptomNine
    symptomTen
    symptomEleven
    symptomTwelve
  }
}
`;

export const QUERY_MEDICALHISTORIES = gql`
  query getMedicalHistorys {
    medicalHistorys {
      _id
      medicalHistoryText
      medicalHistoryAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_MEDICALHIST = gql`
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

// Single userhistory 
