import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return (
    <footer className="fixed bottom-0 z-30 w-full columns-1  flex items-center justify-center space-x-11 bg-slate-800 text-white">

      <section className="flex text-center py-1 gap-10 contact">

        <a
          href="https://github.com/anryl050"
          target="_blank"
          rel="noreferrer"
          className="py-1 self-center"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="white"
            className="anchor-icon"
          />
        </a>

        <a
          href="https://www.facebook.com"
          rel="noreferrer"
          target="_blank"
          className="py-1 self-center"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            color="white"
            className="anchor-icon"
          />
        </a>
      </section>


    </footer>
  );
}

export default Footer;

