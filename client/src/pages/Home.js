import React from 'react';
import { useQuery } from '@apollo/client';
import Lottie from 'lottie-react';
import Heart from '../assets/lotties/heart.json';
import Shifa from '../images/shifaName.png'

// import MedicalHistoryList from '../components/MedicalHistoryList';
import MedicalHistoryForm from '../components/MedicalHistoryForm';

import Auth from '../utils/auth';


import { QUERY_MEDICALHISTORIES } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_MEDICALHISTORIES);
  const medicalHistorys = data?.medicalHistorys || [];

  const lottieStyles = {
    height: '60%',
    width: '60%',
  };

  const shifaStyle ={
    height:"100px",
    width:"200px",
    
  }

   return (


    
      Auth.loggedIn() ? (
      <>
          <div className='h-full pt-40 pb-10'>
          <div className="flex-row justify-center container">

            <div
              className="col-12 col-md-10 mb-3 p-3 bg-white"
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
      backgroundPosition: 'center'
    }}>
    <div className='main h-screen'>
        <div className='pt-24'>
          <div className="h-full flex-row justify-center ">
            <div className="col-10 col-lg-7 col-md-7 flex-row justify-center container pb-20"
            style={{ border: '1px dotted #1a1a1a', backgroundColor: "#ffffff", opacity:"0.7" }}>

              <Lottie
                animationData={Heart}
                style={lottieStyles}
              />
              <div className='flex-row justify-center items-center' >
                <img src={Shifa} alt="Shifa" style={shifaStyle} /> 
              <h1 className="font-bold">- Where Your Health Matters</h1>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
  

      )
  );
};


export default Home;
