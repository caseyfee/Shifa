import React from 'react';
import formFields from '../MedicalHistoryForm/formFields';
import symptomChecks from "../MedicalHistoryForm/symptoms"
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

// import { QUERY_SINGLE_MEDICALHIST } from '../../utils/queries';

const SingleMedicalHistory = ({ patient }) => {


  const patientAnswers = { ...patient, ...patient.medicalHistorys[0] };
  delete patientAnswers.medicalHistorys

  const inputs = [...formFields, ...symptomChecks].map(({ key, label }) => {
    const value = patientAnswers[key] || "";
    return {
      key,
      label,
      isSymptom: key.includes("symptom"),
      value
    }
  });
  const history = patient.medicalHistorys[0];

  return (
    <div className="my-3">
      <h2 className="bg-cyan-500 text-white p-2 m-0 border rounded-md border-solid" style={{ border: '1px dotted #1a1a1a' }}>
        <span style={{ fontSize: '1rem' }}>
          Medical Information was collected on: {history.createdAt}
        </span>
      </h2>
      <div className="bg-slate-100 py-4 border rounded-md border-solid" style={{ border: '1px dotted #1a1a1a' }}>

        <div className="grid grid-cols-1 gap-4 mt-4 px-4 md:grid-cols-1">

          {inputs.map(({ key, label, value, isSymptom }) => {


            if (isSymptom) {

              return <>
              <div>
              <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                type="checkbox"
                id={key}
                name={key}
                checked={value} /><label htmlFor="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
                </div>
                </>

            }
            return <div key={key} >
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                type="text"
                id={key}
                name={key}
                value={value}
                disabled
              />
            </div>
          })}
        </div>
      </div>

        <div className="my-10">
          <CommentList comments={history.comments} />
        </div>
        <div className="bg-cyan-500 text-white p-2 m-0 border rounded-md border-solid text-sm" style={{ border: '1px dotted #1a1a1a' }}>
          <CommentForm medicalHistoryId={patient._id} />
        </div>
    </div>
  );
};

export default SingleMedicalHistory;
