import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 query getUserInfo {
  patients {
    _id
    patientname
    email
    password
    medicalHistorys {
      _id
      medicalHistoryText
      medicalHistoryAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
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

// seems like it should be different?
export const QUERY_MEDICALHISTORIES = gql`
  query medicalHistories($medicalHistoryId: ID!) {
  medicalHistorys(medicalHistoryId: $medicalHistoryId) {
    _id
    medicalHistoryText
    medicalHistoryAuthor
    createdAt
    comments {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
}
`;

export const QUERY_SINGLE_MEDICALHIST = gql`
 query singleMedicalHistory($medicalHistoryId: ID!) {
  medicalHistory(medicalHistoryId: $medicalHistoryId) {
    _id
    medicalHistoryText
    medicalHistoryAuthor
    createdAt
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`;

