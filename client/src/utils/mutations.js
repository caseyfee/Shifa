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

export const Add_USERHIST = gql`

  mutation addUserHistory(
    $firstName: String!, $lastName: String!, $gender: String!, $age: String!, $dob: String!
  $symptomOne: Boolean, $symptomTwo: Boolean, $symptomThree: Boolean, $symptomFour: Boolean, $symptomFive: Boolean, $symptomSix: Boolean,
  $symptomSeven: Boolean, $symptomEight: Boolean, $symptomNine: Boolean, $symptomTen: Boolean,$symptomEleven: Boolean,$symptomTwelve: Boolean, 
  ) {
    addUserHistory(
      firstName: $firstName, lastName: $lastName, gender: $gender, age: $age, dob: $dob,
  symptomOne: $symptomOne, symptomTwo: $symptomTwo, symptomThree: $symptomThree, symptomFour: $symptomFour, symptomFive: $symptomFive,symptomSix: $symptomSix,
  symptomSeven: $symptomSeven, symptomEight: $symptomEight, symptomNine:$symptomNine, symptomTen: $symptomTen,symptomEleven: $symptomEleven, symptomTwelve: $symptomTwelve
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
