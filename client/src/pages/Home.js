import React from 'react';
import { useQuery } from '@apollo/client';

import MedicalHistoryList from '../components/MedicalHistoryList';
import MedicalHistoryForm from '../components/MedicalHistoryForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const medicalHistorys = data?.medicalHistorys || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <MedicalHistoryForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MedicalHistoryList
              medicalHistorys={medicalHistorys}
              title="Some Feed for MedicalHistory(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
