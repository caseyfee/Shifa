import React from 'react';
import { useQuery } from '@apollo/client';
import Lottie from 'lottie-react';
import Heart from '../assets/lotties/heart.json';

// import MedicalHistoryList from '../components/MedicalHistoryList';
import MedicalHistoryForm from '../components/MedicalHistoryForm';

import Auth from '../utils/auth';


import { QUERY_MEDICALHISTORIES } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_MEDICALHISTORIES);
  const medicalHistorys = data?.medicalHistorys || [];

  const lottieStyles = {
    height: '80%',
    width: '80%',
    margin: '0',
  };

  return (
    
            <div className='h-full pt-24 pb-10'>
          <div className="flex-row justify-center container">
              <div className="col-12 col-md-10 mb-3 p-3 flex-row justify-center">
                {/* <img
            src={Image}
            alt="global health care"
          /> */}

                <Lottie
                  animationData={Heart}
                  style={lottieStyles}
                />

                <h1>Shifa - Where Your Health Matters</h1>
              </div>
              </div>
              </div>
          
        

      );
    };

  export default Home;
