import { faContactBook, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Contact() {
  return (
    <div data-aos="fade-down" className="p-5">
      <h2 className="text-3xl font-bold text-teal-300 mb-8 flex items-center gap-3">
        <FontAwesomeIcon icon={faContactBook} className="h-8 w-8" />
        Contact
      </h2>

      <div className="flex flex-col gap-5 md:gap-8 md:flex-row justify-center items-center flex-wrap">
        <a href='tel:+917092151614' target="_blank" className="flex items-center gap-4 w-[17rem]">
          <FontAwesomeIcon icon={faPhone} className="text-green-300 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="">+91 9360572941</p>
          </div>
        </a>

        <a href='mailto:peermohamed8558@gmail.com' target="_blank" className="flex items-center gap-4 w-[17rem]">
          <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">Email</h5>
            <p className="">peermohamed8558@gmail.com</p>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/peer-mohamed-a7649228a' target='_blank' className="flex items-center gap-4 w-[17rem]">
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-[1.5rem]" />
          <div>
            <h5 className="text-lg font-semibold">LinkedIn</h5>
            <p className="">https://www.linkedin.com/in/peer-mohamed-a7649228a</p>
          </div>

        </a>

        <a href='https://github.com/peermohamed07/PortFolio' target='_blank' className="flex items-center gap-4 w-[17rem]">
          <FontAwesomeIcon icon={faGithub} className="text-[1.5rem]" />
          <div>

            <h5 className="text-lg font-semibold">GitHub</h5>
            <p className="">github.com/peermohamed07/PortFolio</p>
          </div>
        </a>
      
      </div>
    </div>
  );
}

export default Contact;
