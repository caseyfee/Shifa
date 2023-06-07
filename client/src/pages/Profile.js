import React from 'react';
import Lottie from 'lottie-react';
import Heart from '../assets/lotties/heart.json';


import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { Navigate, useParams } from 'react-router-dom';


const Profile = () => {

    const { patientname: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { patientname: userParam },
    });

    const user = data?.me || data?.user || {};
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.patientname === userParam) {
      return <Navigate to="/me" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.patientname) {
      return (
        <h4>
          You need to be logged in to see this.
        </h4>
      );
    }

    const lottieStyles = {
        height: '80%',
        width: '80%',
        margin: '0',
    };





























    return (
        <main>
            <div className="flex-row justify-center h-screen">
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
        </main>
    );
};

export default Profile;
