import { useState, useEffect } from "react";
import DownloadBtn from "../components/DownloadBtn";
import Socials from "../components/Socials";
import Type from "../components/Type";
function HeroBanner({ theme }) {
  return (
    <header className="px-5 my-10 md:px-10 relative xl:h-[88svh]">
      <div className=" container flex flex-col-reverse items-center gap-2 mx-auto md:flex-row h-full">
        <div className="relative flex flex-col gap-3 xl:gap-5 w-full items-start justify-start py-5 h-full px-2 sm:justify-center flex-1 font-popins">
          <h1 className="uppercase">
            <span
              className={`block tracking-wide text-xl md:text-2xl xl:text-4xl ${
                theme === "light"
                  ? "text-white text-border-black"
                  : "text-black text-border-white"
              }`}
            >
              Hey There Its Me,
            </span>
            <span className="text-3xl md:text-3xl xl:text-5xl  text-violet-500 md:tracking-wider">
              SREEKESH K PRABHU
            </span>
          </h1>
          <Type />
          <h3 className="text-xs sm:text-sm font-roboto font-medium xl:text-pretty text-justify w-11/12 ">
            I’m a passionate developer from India, constantly diving into new
            tech challenges. My curiosity fuels daily discoveries and an endless
            quest for knowledge.
          </h3>
          <Socials theme={theme} />
          <DownloadBtn />
        </div>
        <figure className="flex-1 grid place-items-center relative select-none">
          <div className="absolute w-full animate-spin z-[-1]">
            <div
              className={`drop-shadow-glow w-11/12 aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full ${
                theme === "light"
                  ? " bg-dark bg-opacity-[20%]"
                  : "bg-light bg-opacity-[30%]"
              } `}
            ></div>
          </div>
          <img
            className={` relative `}
            src="/images/profile/profile.webp"
            alt="Me"
            loading="lazy"
          />
        </figure>
      </div>
    </header>
  );
}

export default HeroBanner;
