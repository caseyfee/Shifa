import { gql } from '@apollo/client';

// WE NEED IT:- (LOGIN PAGE)
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      patient {
        _id
        # patientname
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
 mutation AddPatient($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addPatient(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
      patient {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

// WE NEED IT:- (MEDICALHISTORYFORM - INDEX.JS)
export const ADD_MEDICALHIST = gql`
  mutation addMedicalHistory(medicalHistoryText: String, gender: String, age: String, dob: String, symptomOne: Boolean,
    symptomTwo:Boolean, symptomThree: Boolean, symptomFour: Boolean, symptomFive:Boolean,
    symptomSix: Boolean, symptomSeven: Boolean, symptomEight: Boolean, symptomNine: Boolean, symptomTen: Boolean,  
    symptomEleven: Boolean, symptomTwelve: Boolean) {
    addMedicalHistory(medicalHistoryText: $medicalHistoryText, gender: $gender, age: $age, dob: $dob, symptomOne: $symptomOne, symptomTwo: $symptomTen, symptomThree:$symptomThree, symptomFour:$symptomFour, symptomFive:$symptomFive,symptomSix:$symptomSix,symptomSeven:$symptomSeven,symptomEight:$symptomEight,symptomNine:$symptomNine,symptomTen:$symptomTen,symptomEleven:$symptomEleven,symptomTwelve:$symptomTwelve) {
      _id
      medicalHistoryText
      createdAt
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

      # comments {
      #   _id
      #   commentText
      # }
    }
  }
`;


export const ADD_USERHIST = gql`

  mutation addUserHistory(
    $userHistory: UserHistoryInput!, 
  ) {
    addUserHistory(
      userHistory: $userHistory
      ) {
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



// export const ADD_COMMENT = gql`
//   mutation addComment(
//     $medicalHistoryId: ID!
//     $commentText: String!
//     $commentAuthor: String!
//   ) {
//     addComment(
//       medicalHistoryId: $medicalHistoryId
//       commentText: $commentText
//       commentAuthor: $commentAuthor
//     ) {
//       _id
//       medicalHistoryText
//       medicalHistoryAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;
