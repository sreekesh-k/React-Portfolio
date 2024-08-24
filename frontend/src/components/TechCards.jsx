import React from "react";
import { FaReact, FaDocker, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const icons = {
  FaReact: (
    <FaReact
      className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
      color="#61DBFB"
    />
  ),
  FaDocker: (
    <FaDocker
      className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
      color="#2496ED"
    />
  ),
  FaNodeJs: (
    <FaNodeJs
      className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
      color="#68A063"
    />
  ),
  SiMongodb: (
    <SiMongodb
      className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
      color="#47A248"
    />
  ),
  SiTailwindcss: (
    <SiTailwindcss
      className="w-full h-full drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105"
      color="#38B2AC"
    />
  ),
};

const TechCard = ({ logo, altText, className, isActive, onClick }) => {
  return (
    <div
      className={`relative flex flex-col gap-2 items-center justify-center group cursor-pointer`}
      onClick={onClick}
    >
      <div
        className={`grid place-items-center ${
          isActive ? className : ""
        } w-10 sm:w-[4rem] aspect-square`}
      >
        {icons[logo] || <span>{altText}</span>}
      </div>
      <div className="relative w-full h-6">
        <div
          className={`${
            isActive ? "block" : "hidden"
          } absolute inset-x-0 bottom-0 bg-dark bg-opacity-10 p-2`}
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TechCard;
