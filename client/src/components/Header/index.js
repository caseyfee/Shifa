import React from 'react';
import Image from '../../images/white-slogan2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faRightToBracket,
  faUserPlus,
  faCalendarCheck,
  faRightFromBracket,
  faAddressCard,
  faIdBadge
} from '@fortawesome/free-solid-svg-icons'

import Auth from '../../utils/auth';

export default function Navbar({ fixed }) {

  const logoStyle = {
    height: '130px',
    width: '300x',
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (

    <>
 <nav className="fixed top-0 z-30 w-full flex items-center justify-between bg-cyan-500 py-2 shadow-xl">
      <div className="container flex flex-wrap items-center justify-between"> 
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/" className="flex items-center"> 
            <img src={Image} className="" style={logoStyle} alt="Shifa Logo" />
          </a>
          <button
            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="white"
            />
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <section className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {Auth.loggedIn() ? (
                  <>
                    <span  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white">Welcome {Auth.getProfile().data.firstName}!</span>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faHome}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2 " onClick={() => window.location.href = "/"}>Home</span>
                    </div>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faIdBadge}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2" onClick={() => window.location.href = "/me"}>{Auth.getProfile().data.firstName}'s Profile</span>
                    </div>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faCalendarCheck}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2" onClick={() => window.location.href = "/appointment"}>Appointment</span>
                    </div>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2" onClick={logout}>Logout</span>
                    </div>


                  </>
                ) : (
                  <>
                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/"
                    >
                      <FontAwesomeIcon
                        icon={faHome}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Home</span>
                    </a>

                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/about"
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">About Us</span>
                    </a>

                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/Login"
                    >
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                        color="white"
                        className="text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Login</span>
                    </a>

                    <a
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="/Signup"
                    >
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        color="white"
                        className="text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Register</span>
                    </a>

                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

