import { gql } from '@apollo/client';

// queries all users
export const QUERY_USERS = gql`
  query QueryPatients {
    patients {
      _id
      firstName
      lastName
      email
    }
  }
`;

// MOVING AWAY FROM USERS- NOT HELPFUL queries single user?
// export const QUERY_USER = gql`
//  query getUserInfo {
//   patients {
//     _id
//     patientname
//     email
//     password
//     medicalHistorys {
//       _id
//       medicalHistoryText
//       medicalHistoryAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//     userHistorys {
//       _id
//       firstName
//       lastName
//       gender
//       age
//       dob
//       symptomOne
//       symptomTwo
//       symptomThree
//       symptomFour
//       symptomFive
//       symptomSix
//       symptomSeven
//       symptomEight
//       symptomNine
//       symptomTen
//       symptomEleven
//       symptomTwelve
//     }
//   }
// }
// `;

// MOVING AWAY FROM USERS- NOT HELPFUL 
// get all user medical histories
// export const QUERY_USERHISTORIES = gql`
// query getUserHistorys {
//   userHistorys {
//     _id
//     firstName
//     lastName
//     gender
//     age
//     dob
//     symptomOne
//     symptomTwo
//     symptomThree
//     symptomFour
//     symptomFive
//     symptomSix
//     symptomSeven
//     symptomEight
//     symptomNine
//     symptomTen
//     symptomEleven
//     symptomTwelve
//   }
// }
// `;




// seems like it should be different?


export const QUERY_MEDICALHISTORIES = gql`
  # query medicalHistories($medicalHistoryId: ID!) {
  query medicalHistories {
  # medicalHistorys(medicalHistoryId: $medicalHistoryId) {
  medicalHistorys {
    _id
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

// query single user medical history - works in Apollo
export const QUERY_SINGLE_MEDICALHIST = gql`
 query singleMedicalHistory($patientId: ID!) {
 medicalHistorys(patientId: $patientId) {
    _id
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
    medicalHistoryText
    createdAt
  }
}`;



// ADDED TODAY 11 JUN
export const QUERY_ME = gql`
  query MyMedicalHistory {
  myMedicalHistory {
    _id
    firstName
    lastName
    email
    medicalHistorys {
      _id
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
      medicalHistoryText
      createdAt
    }
  }
}
`;