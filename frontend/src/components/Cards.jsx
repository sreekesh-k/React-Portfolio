import React from "react";
import { FaCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Cards({ imageSrc, projectName, sourceCodeUrl, liveUrl, theme }) {
  return (
    <div className="relative font-popins group w-full border-[1.5px] border-dark overflow-hidden rounded-lg shadow-lg aspect-square">
      <img
        src={imageSrc}
        alt={projectName}
        className={`w-full h-full object-contain transition-transform duration-300 transform group-hover:scale-110 ${
          theme === "light" ? "brightness-100" : "brightness-[70%]"
        }`}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-light bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1">
        <span className="text-white text-base md:text-xl font-semibold drop-shadow-2xl text-center">
          {projectName}
        </span>
      </div>
      <div className="absolute left-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity  bg-dark p-2 rounded-full w-10 h-10 shadow-md">
        <a
          href={sourceCodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code"
          role="button"
        >
          <FaCode className="w-full h-full" />
        </a>
      </div>
      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity bg-dark p-2 rounded-full w-10 h-10 shadow-md">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit live site"
          role="button"
        >
          <FiArrowRight className="w-full h-full" />
        </a>
      </div>
    </div>
  );
}

export default Cards;
