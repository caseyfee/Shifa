import React from 'react';
import { useQuery } from '@apollo/client';
import Lottie from 'lottie-react';
import Heart from '../assets/lotties/heart.json';

// import MedicalHistoryList from '../components/MedicalHistoryList';
// import MedicalHistoryForm from '../components/MedicalHistoryForm';
import SingleMedicalHistory from '../components/SingleMedicalHistory';

import Auth from '../utils/auth';


import { QUERY_SINGLE_MEDICALHIST } from '../utils/queries';

const Profile = () => {

  const { loading, data } = useQuery(QUERY_SINGLE_MEDICALHIST);
  const singleMedicalHistory = data?.singleMedicalHistory || [];

  const lottieStyles = {
    height: '80%',
    width: '80%',
    margin: '0',
  };

  return (

    <div className='h-full pt-24 pb-10'>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3 flex-row justify-center">
          {/* <img
            src={Image}
            alt="global health care"
          /> */}

          <h2 className='mt-12'>Welcome to your profile page!</h2>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <SingleMedicalHistory
              singleMedicalHistory={singleMedicalHistory}
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
