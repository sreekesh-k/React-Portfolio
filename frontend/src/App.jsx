import React, { useState, useEffect } from "react";
import HeroBanner from "./modules/HeroBanner";
import { FaSun, FaMoon } from "react-icons/fa";
import About from "./modules/About";
import Skills from "./modules/Skills";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log(import.meta.env.REACT_APP_GH_TOKEN)
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="py-3">
        <div className="container p-3 mx-auto">
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
        </div>
      </nav>
      <HeroBanner theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
    </>
  );
}

export default App;
