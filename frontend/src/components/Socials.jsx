import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Socials({theme}) {
  return (
    <div className="relative flex items-start justify-center gap-5 md:gap-10">
      <a
        className={`grid place-items-center w-6 md:w-10 aspect-square ${
          theme === "light" ? "" : "invert"
        }`}
        href="https://github.com/sreekesh-k"
        aria-label="Visit Sreekesh's GitHub profile"
        title="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          color="#333"
          alt="GitHub Icon"
        />
      </a>
      <a
        className="grid place-items-center w-6 md:w-10 aspect-square"
        href="mailto:sreekeshkprabhu.arp@gmail.com"
        aria-label="Send an email to Sreekesh"
        title="Email"
      >
        <SiGmail
          className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          color="#D44638"
          alt="Gmail Icon"
        />
      </a>
      <a
        className="grid place-items-center w-6 md:w-10 aspect-square"
        href="https://www.linkedin.com/in/sreekesh-k-prabhu-7b835124a"
        aria-label="Visit Sreekesh's LinkedIn profile"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          color="#0077B5"
          alt="LinkedIn Icon"
        />
      </a>
      <a
        className="grid place-items-center w-6 md:w-10 aspect-square"
        href="https://www.instagram.com/sreekesh_k_prabhu/"
        aria-label="Visit Sreekesh's Instagram profile"
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram
          className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          color="#C13584"
          alt="Instagram Icon"
        />
      </a>
    </div>
  );
}

export default Socials;
