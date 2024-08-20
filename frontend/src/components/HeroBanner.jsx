import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function HeroBanner() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="p-3">
      <div className=" container mx-auto text-sm md:text-xl px-5">
        {/* navbar */}
        <div className="flex">
          <div className="flex-1 font-popins">
            <img
              src="/images/logos/logo.svg"
              alt="logo"
              className={`object-contain h-8 md:h-12 hover:scale-105 ${
                theme === "light" ? "" : " invert"
              }`}
            />
          </div>
          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={toggleTheme}
              className="flex items-end hover:scale-105"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>
        {/* hero banner */}
        <div className="flex flex-col-reverse md:flex-row h-[88svh]">
          <div className="flex-1 font-popins flex flex-col items-start justify-center md:px-5">
            <h1 className="uppercase mb-3">
              <span
                className={`block tracking-wide text-2xl md:text-4xl ${
                  theme === "light"
                    ? "text-white text-border-black"
                    : "text-black text-border-white"
                }`}
              >
                Hey There Its Me,
              </span>
              <span className="text-5xl">SREEKESH K PRABHU</span>
            </h1>
            <h1 className="text-2xl md:text-3xl uppercase tracking-widest">i'm a Fullstack web developer</h1>
          </div>
          <div className="flex-1">
            <img src="" alt="its me" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroBanner;
