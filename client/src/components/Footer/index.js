import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook
} from '@fortawesome/free-brands-svg-icons';
import {
  faHandHoldingMedical,
  faSquarePhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'


export default function Footer({ fixed }) {

  return (
    <>
      <footer className="fixed bottom-0 z-30 w-full columns-1 flex items-center justify-center space-x-11 bg-cyan-500 text-white pt-2 shadow-xl">

        <section className="flex text-center gap-10 contact justify-center"> {/* Added "items-center" and "justify-center" */}

          <FontAwesomeIcon
            icon={faSquarePhone}
            color="white"
          />

          <FontAwesomeIcon
            icon={faEnvelope}
            color="white"
          />

          <a
            href="https://www.facebook.com"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="white"
            />
          </a>



          <div className="flex  gap-3 ">
            <p className="flex text-sm">© </p>
            <FontAwesomeIcon
              icon={faHandHoldingMedical}
              color="white"
            />
            <p className="flex text-sm">Shifa, Medical Group</p>
          </div>

        </section>

      </footer>
    </>
  );


}

