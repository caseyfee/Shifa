import React from 'react';
import { useQuery } from '@apollo/client';
// import Image from "../images/global-healthcare.avif";

// import MedicalHistoryList from '../components/MedicalHistoryList';
import MedicalHistoryForm from '../components/MedicalHistoryForm';

import Auth from '../utils/auth';


import { QUERY_MEDICALHISTORIES } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_MEDICALHISTORIES);
  const medicalHistorys = data?.medicalHistorys || [];

  return (
    <main>
      <div className="flex-row justify-center container">

        {Auth.loggedIn() ? (
          <>
            <div
              className="col-12 col-md-10 mb-3 p-3"
              style={{ border: '1px dotted #1a1a1a' }}
            >
              <MedicalHistoryForm />
            </div>

            {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MedicalHistoryList
              medicalHistorys={medicalHistorys}
              title="Some Feed for MedicalHistory(s)..."
            />
          )}
          </div> */}

          </>
        ) : (
          <>
            <div className="col-12 col-md-10 mt-40 p-3">
              {/* <img
            src={Image}
            alt="global health care"
          /> */}
              <p>
                We believe that <strong> healthcare is a right, not a privilege </strong>. We are working to create a future where everyone has access to quality healthcare.</p>
              <p>
                We treat everyone with dignity, respect, and empathy. We want you to feel comfortable talking to us about your health. We will work quickly to diagnose your problems and give you the treatment you need.</p>
              <p>
                We want everyone to have access to good healthcare, no matter how much money they have or where they live. We work with community organizations to reach people who might not otherwise be able to get healthcare.</p>
              <p>
                We believe that your physical, mental, and social health are all connected. We offer preventive care, health education, and counseling to help you stay healthy.</p>
              <p>
                We are committed to making a difference in our community. We are always looking for new ways to improve our services and make healthcare more affordable and accessible.</p>
              <p>
                We are driven by a sense of social responsibility and a desire to make a positive impact on the lives of our patients and the community at large. By continuously seeking innovation, embracing evidence-based practices, and fostering partnerships, we aspire to be a trusted healthcare provider that contributes to the overall health and resilience of our society.
              </p>

            </div>
          </>
        )}



      </div>
    </main>
  );
};

export default Home;
