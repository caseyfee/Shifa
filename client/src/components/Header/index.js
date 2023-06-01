import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>

          {/* Need to figure out how to link this to the home page? */}
          
          <Link className="text-light" to="home">
            <h1 className="m-0">Shifa - We Care</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Welcome {Auth.getProfile().data.patientname}!</span>
              {/* Need to update the onClick Action to take to the Appointment Page */}

              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Appointment
              </button>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>

            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
