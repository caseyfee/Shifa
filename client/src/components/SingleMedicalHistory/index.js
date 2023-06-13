// THIS WAS COPIED INTO PATIENT HISTORY
// but is what is currently linked to the 
// Profile


import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

import { QUERY_SINGLE_MEDICALHIST } from '../../utils/queries';

const SingleMedicalHistory = () => {

  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { medicalHistoryId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_MEDICALHIST, {
    // pass URL parameter
    variables: { medicalHistoryId: medicalHistoryId },
  });

  const medicalHistory = data?.medicalHistory || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      {/* <h1> {title} </h1> */}
      
        <h2 className="bg-cyan-500 text-white p-2 m-0 border rounded-md border-solid" style={{ border: '1px dotted #1a1a1a' }}>
          {medicalHistory.dob} <br />
          <span style={{ fontSize: '1rem' }}>
            Medical Information was collected on :{medicalHistory.createdAt}
          </span>
        </h2>
        <div className="bg-slate-100 py-4 border rounded-md border-solid" style={{ border: '1px dotted #1a1a1a' }}>
          <blockquote
            className="p-4"
            style={{
              fontSize: '1.5rem',
              color: "#04243F",
              lineHeight: '2',
            }}
          > {medicalHistory.gender}
            {medicalHistory.age}
            {medicalHistory.symptomOne}
            {medicalHistory.symptomOne}
            {medicalHistory.medicalHistoryText}
          </blockquote>
        </div>
     

      <div className="my-10">
        <CommentList comments={medicalHistory.comments} />
      </div>
      <div className="bg-cyan-500 text-white p-2 m-0 border rounded-md border-solid text-sm" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm medicalHistoryId={medicalHistory._id} />
      </div>
    </div>
  );
};

export default SingleMedicalHistory;
