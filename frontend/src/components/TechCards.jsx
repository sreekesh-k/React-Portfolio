import React from "react";

const TechCard = ({ logo, altText, description, className }) => {
  return (
    <div className={`relative flex flex-col gap-2 items-center justify-center group`}>
      <div className={`grid place-items-center ${className}`}>
        <img
          src={logo}
          alt={altText}
          className={`object-contain w-10 sm:w-20 aspect-square drop-shadow-md hover:scale-105`}
        />
      </div>
      <div className="aspect-square h-6"></div>
      <div
        className="hidden group-hover:block absolute bottom-0 aspect-square h-6 bg-dark bg bg-opacity-10"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>
    </div>
  );
};

export default TechCard;
