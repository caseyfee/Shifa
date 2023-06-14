import React from 'react';
import { Link } from 'react-router-dom';

const MedicalHistoryList = ({ medicalHistorys, title }) => {
  if (!medicalHistorys.length) {
    return <h3>No MedicalHistorys Yet</h3>;
  }

  return (
    <div>
      {medicalHistorys &&
        medicalHistorys.map((medicalHistory) => (
          <div key={medicalHistory._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {medicalHistory.medicalHistoryAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this medicalHistory on {medicalHistory.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{medicalHistory.medicalHistoryText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/medicalHistorys/${medicalHistory._id}`}
            >
              Join the discussion on this medicalHistory.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MedicalHistoryList;
