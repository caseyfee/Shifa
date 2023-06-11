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


    
      Auth.loggedIn() ? (
      <>
          <div className='h-full pt-40 pb-10'>
          <div className="flex-row justify-center">

            <div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
              <MedicalHistoryForm />
            </div>

          </div>
        </div>
      </>
      ) : (
     
          <div style={{
      height: "screen",
      width:"screen",
      backgroundSize: 'cover',
      backgroundImage: `url(${require('../images/seattle.jpg')})`,
      backgroundAttachment: 'fixed',  
      backgroundPosition: 'center',   
    }}>
    <div className='main'>
        <div className='h-full pt-24 pb-10'>
          <div className="flex-row justify-center">
            <div className=" col-12 col-md-10 mb-3 p-3 flex-row justify-center" >

              <Lottie
                animationData={Heart}
                style={lottieStyles}
              />

              <h1>Shifa - Where Your Health Matters</h1>
            </div>
          </div>
        </div>
        </div>
        </div>
  

      )
  );
};


export default Home;
