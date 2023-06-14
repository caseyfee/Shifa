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
mutation addMedicalHistory($medicalHistory: MedicalHistoryInput!) {
  addMedicalHistory(medicalHistory: $medicalHistory) {
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
