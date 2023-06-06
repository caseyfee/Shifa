import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MEDICALHIST } from '../../utils/mutations';
import { QUERY_MEDICALHISTORIES } from '../../utils/queries';

import Auth from '../../utils/auth';
import formFields from './formFields';
import symptomChecks from './symptoms';

const MedicalHistoryForm = () => {

  const [medicalHistoryText, setMedicalHistoryText] = useState('');

  const [userHistory, setUserHistory] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    dob: "",
    symptomOne: false,
    symptomTwo: false,
    symptomThree: false,
    symptomFour: false,
    symptomFive: false,
    symptomSix: false,
    symptomSeven: false,
    symptomEight: false,
    symptomNine: false,
    symptomTen: false,
    symptomEleven: false,
    symptomTwelve: false
  });


  const [addMedicalHistory, { error }] = useMutation(ADD_MEDICALHIST, {
    update(cache, { data: { addMedicalHistory } }) {
      try {
        const { medicalHistorys } = cache.readQuery({ query: QUERY_MEDICALHISTORIES });

        cache.writeQuery({
          query: QUERY_MEDICALHISTORIES,
          data: { medicalHistorys: [addMedicalHistory, ...medicalHistorys] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // event handler for the submit button
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMedicalHistory({
        variables: {
          userHistory,
          medicalHistoryText,
          medicalHistoryAuthor: Auth.getProfile().data.patientname,
        },
      });

      setMedicalHistoryText('');
      setUserHistory('');
    } catch (err) {
      console.error(err);
    }
  };


  const handleChange = (event) => {
    const { name, value, checked } = event.target;
  
    if (name === 'medicalHistoryText') {
      setMedicalHistoryText(value);
    }else if (formFields.includes(name)) {
      setUserHistory({ ...userHistory, [name]: value})    
    }else if(name.includes("symptom")){
      setUserHistory({ ...userHistory, [name]: checked}) 
    }
  };

  // render the page elements
  return (
    <div>
      <h3>New Patient Medical History Form</h3>

      {Auth.loggedIn() ? (
        <>

          <form
            className="flex-col-1 align-center"
            onSubmit={handleFormSubmit}
          >
            <p>Patient Information</p>

            {formFields.map(({ label, key }) => {
              return <div key={key} className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  id={key}
                  name={key}
                  value={userHistory[key]}
                  placeholder="Enter your information"
                  onChange={handleChange}>
                </input>
              </div>
            })}

            <p>Symptoms</p>

            {symptomChecks.map(({ label, key }) => {
              return <div key={key} className="flex items-center ">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={userHistory[key]}
                  onChange={handleChange} />
                <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
              </div>
            })}

            <p>Other:</p>

            <div className="mt-6 mb-6">
              <textarea
                name="medicalHistoryText"
                placeholder="Here's a new medicalHistory..."
                value={medicalHistoryText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add MedicalHistory
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your medicalHistorys. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default MedicalHistoryForm;
