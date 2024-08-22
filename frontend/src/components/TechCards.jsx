import React from "react";

const TechCard = ({ logo, altText, className, isActive, onClick }) => {
  return (
    <div
      className={`relative flex flex-col gap-2 items-center justify-center group cursor-pointer `}
      onClick={onClick}
    >
      <div className={`grid place-items-center ${isActive ? className : ""}`}>
        <img
          src={logo}
          alt={altText}
          className={`object-contain w-10 sm:w-20 aspect-square drop-shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105`}
        />
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
