import React from 'react';
import { useQuery } from '@apollo/client';

// import MedicalHistoryList from '../components/MedicalHistoryList';
// import MedicalHistoryForm from '../components/MedicalHistoryForm';
import SingleMedicalHistory from '../components/SingleMedicalHistory';

import Auth from '../utils/auth';


import { QUERY_ME } from '../utils/queries';

const Profile = () => {

  const { loading, data } = useQuery(QUERY_ME);
  const myMedicalHistory = data?.myMedicalHistory || {}

  return (
    
            <div className='h-full pt-24 pb-10'>
          <div className="flex-row justify-center container ">
              <div className="col-12 col-md-10 mb-3 p-3 flex-row justify-center bg-white" style={{ border: '1px dotted #1a1a1a' }}>
          
          <h1 className='mt-20 mb-5 font-bold'>Welcome to your profile page!</h1>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <SingleMedicalHistory
              patient={myMedicalHistory}
                title="Your medical history..."
              />
            )}
          </div>

        </div>
      </div>
    </div>



  );
};

export default Profile;
