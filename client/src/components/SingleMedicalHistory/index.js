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
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {medicalHistory.dob} <br />
        <span style={{ fontSize: '1rem' }}>
          this medical information was collected on {medicalHistory.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        > {medicalHistory.gender}
          {medicalHistory.age}
          {medicalHistory.symptomOne}
          {medicalHistory.symptomOne}
          {medicalHistory.medicalHistoryText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={medicalHistory.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm medicalHistoryId={medicalHistory._id} />
      </div>
    </div>
  );
};

export default SingleMedicalHistory;