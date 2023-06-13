import React from 'react';
import { useQuery } from '@apollo/client';

import PatientList from '../components/PatientList';

import { QUERY_USERS } from '../utils/queries';

const Profile2 = () => {

    const { data } = useQuery(QUERY_USERS);
    const patients = data?.patients || [];

    return (

        <div className='m-5 h-full pt-24 pb-10 justify-center'>
            <div className="flex-row justify-center container">
                <div className="col-12 col-md-10 mb-3 p-3 flex-row justify-center">

                    {/* <h1 className='p-4'>Shifa</h1> */}
                    <h2 className='p-4 col-12 '>Welcome to the patient database page</h2>
                    <PatientList
                        patients={patients}
                        title="Connect with these folks..."
                    />
                </div>
            </div>
        </div>


    );
};

export default Profile2;
