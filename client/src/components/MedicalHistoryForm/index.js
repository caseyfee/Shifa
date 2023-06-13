import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MEDICALHIST } from '../../utils/mutations';
import { QUERY_MEDICALHISTORIES } from '../../utils/queries';
// import { ADD_USERHIST } from '../../utils/mutations';
// import { QUERY_USERHISTORIES } from '../../utils/queries';


import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import formFields from './formFields';
import symptomChecks from './symptoms';

const MedicalHistoryForm = () => {

  const [medicalHistory, setMedicalHistory] = useState({
    medicalHistoryText: '',
    firstName: '',
    lastName: '',
    gender: '',
    age: '',
    dob: '',
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
    symptomTwelve: false,
  });

  const [addMedicalHistory, { error }] = useMutation(ADD_MEDICALHIST)
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

      const medicalHistoryInput = {...medicalHistory}
      delete medicalHistoryInput.firstName;
      delete medicalHistoryInput.lastName;

      await addMedicalHistory({
        variables: {
          medicalHistory: medicalHistoryInput
        }
      })
     
    } catch (err) {
      console.error(err);
    }

  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;

    if (name === 'medicalHistoryText') {
      setMedicalHistory((prevMedicalHistory) => ({
        ...prevMedicalHistory,
        medicalHistoryText: value,
      }));
    } else if (name.includes('symptom')) {
      setMedicalHistory((prevMedicalHistory) => ({
        ...prevMedicalHistory,
          [name]: checked,
      }));
    } else {
      setMedicalHistory((prevMedicalHistory) => ({
        ...prevMedicalHistory,
          [name]: value,
      }));
    }
  };


  // render the page elements
  return (
    <div className='bg-white'>
      <h3>New Patient Medical History Form</h3>


      <>

        <form
          className="flex-col-2 align-center "
          onSubmit={handleFormSubmit}
        >
          <p className="mt-8">Patient Information</p>

          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            {formFields.map(({ label, key }) => {
              return <div key={key} >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                  type="text"
                  id={key}
                  name={key}
                  value={medicalHistory[key]}
                  placeholder="Enter your information"
                  onChange={handleChange}
                  required
                />
                {medicalHistory[key] === '' && (
                  <p className="text-red-500 text-xs mt-1">This field is required</p>
                )}
              </div>
            })}
          </div>

          <p className="mt-8">Symptoms</p>

          <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-3">
            {symptomChecks.map(({ label, key }) => {
              return <div key={key} >
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  id={key}
                  name={key}
                  checked={medicalHistory[key]}
                  onChange={handleChange}
                />
                <label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
              </div>
            })}
          </div>

          <p className="mt-8">Other:</p>

          <div className="mt-6 mb-6">
            <textarea
              name="medicalHistoryText"
              placeholder="Add additional infromation related to your health here"
              value={medicalHistory.medicalHistoryText}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
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

    </div>
  );
};

export default MedicalHistoryForm;
