import { gql } from '@apollo/client';

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
 mutation AddPatient($credentials: PatientCredentials!) {
  addPatient(credentials: $credentials) {
    token
      patient {
        _id
        firstName
        lastName
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
