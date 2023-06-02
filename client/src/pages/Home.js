import React from 'react';
import { useQuery } from '@apollo/client';
import Image from "../images/global-healthcare.avif";

import MedicalHistoryList from '../components/MedicalHistoryList';
import MedicalHistoryForm from '../components/MedicalHistoryForm';

import Auth from '../utils/auth';

import { QUERY_MEDICALHISTORIES } from '../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_MEDICALHISTORIES);
  const medicalHistorys = data?.medicalHistorys || [];

  return (
    <main>
      <div className="flex-row justify-center">

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
               <div className="col-12 col-md-10 mb-3 p-3">
          <img
            src={Image}
            alt="global health care"
          />

          <p>
            At our non-profit doctor's office, our mission is to provide compassionate, accessible, and high-quality healthcare services to individuals in need, regardless of their socioeconomic status. We are dedicated to improving the health and well-being of our community by delivering comprehensive medical care and promoting preventive measures.
          </p>
          <p>
            Our commitment lies in fostering a patient-centered approach, where every individual is treated with dignity, respect, and empathy. We strive to create a warm and welcoming environment, where patients feel comfortable discussing their concerns, receiving timely diagnoses, and accessing appropriate treatments.
          </p>
          <p>
            We aim to address healthcare disparities by offering affordable and inclusive services to underserved populations, ensuring that everyone has equal access to medical expertise and resources. Through collaboration with community organizations, we seek to reach those who face barriers to healthcare, such as limited financial means, lack of insurance, or geographic isolation.
          </p>
          <p>
            At our non-profit doctor's office, we value a holistic approach to healthcare, recognizing the interconnectedness of physical, mental, and social well-being. We strive to integrate preventive care, health education, and counseling services into our practice, empowering individuals to make informed decisions and adopt healthier lifestyles.
          </p>
          <p>
            We are driven by a sense of social responsibility and a desire to make a positive impact on the lives of our patients and the community at large. By continuously seeking innovation, embracing evidence-based practices, and fostering partnerships, we aspire to be a trusted healthcare provider that contributes to the overall health and resilience of our society.
          </p>
          <p>
            Together, we envision a future where healthcare is a fundamental right, and our non-profit doctor's office is at the forefront of advancing equitable and compassionate healthcare for all.
          </p>
        </div>
            </>
          )}


         
      </div>
    </main>
  );
};

export default Home;
