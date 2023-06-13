import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs'
// import SingleMedicalHistory from '../components/SingleMedicalHistory';
import Appointment from './pages/Appointment';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';

import Header from './components/Header';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Header />
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/Home"
                element={<Home />}
              />
              <Route
                path="/Login"
                element={<Login />}
              />
              <Route
                path="/Signup"
                element={<Signup />}
              />
              
              {/* THESE SHOULD USE AFTER FOR DR. SIDE SO CAN OPEN PATIENT INFO. */}
              {/* <Route
                path="/medicalHistorys/:medicalHistoryId"
                element={<Profile />}
              /> */}
              {/* <Route
                path="/medicalHistorys/:patientId"
                element={<Profile />}
              /> */} 

              <Route 
                path="/me" 
                element={<Profile />}
              />

              <Route
                path="/appointment"
                element={<Appointment />}
              />
               <Route
                path="/about"
                element={<AboutUs />}
              />
            </Routes>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
