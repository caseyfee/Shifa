import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    patientname: '',
    email: '',
    password: '',
    lastName: '',
    phoneNumber: '',
  });
  const [addPatient, { error, data }] = useMutation(ADD_USER);
  const [isClientRegistration, setIsClientRegistration] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addPatient({
        variables: { ...formState },
      });

      Auth.login(data.addPatient.token);
    } catch (e) {
      console.error(e);
    }
  };

  const toggleRegistration = () => {
    setIsClientRegistration(!isClientRegistration);
  };

  return (
    <section className="bg-white h-full py-40">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5"></div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div className="w-full">
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account and begin setting up your profile.
            </p>

            <div className="mt-6">
              <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <>
                  <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        First Name
                      </label>
                      <input
                        placeholder="Your name"
                        name="patientname"
                        type="text"
                        value={formState.patientname}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Last Name
                      </label>
                      <input
                        placeholder="Your last name"
                        name="lastName"
                        type="text"
                        value={formState.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        placeholder="XXX-XX-XXXX-XXX"
                        name="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email Address
                      </label>
                      <input
                        placeholder="Your email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Password
                      </label>
                      <input
                        placeholder="******"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Confirm Password
                      </label>
                      <input
                        placeholder="******"
                        name="confirmPassword"
                        type="password"
                        value={formState.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <span>Patient Registration</span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={isClientRegistration}
                          onChange={toggleRegistration}
                        />
                        <span className="slider round"></span>
                      </label>
                      <span>Doctor Registration</span>
                    </div>

                    {isClientRegistration ? (
                      <button type="submit">
                        <span>Doctor Sign Up</span>
                      </button>
                    ) : (
                      <button type="submit">
                        <span>Patient Sign Up</span>
                      </button>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;



