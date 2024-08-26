import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaInfoCircle } from "react-icons/fa";
function Skills({ theme }) {
  const [langShare, setLangShare] = useState({});
  const [langColorMap, setLangColorMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.REACT_APP_PUBLIC_API}/github/languages`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
          fetchData();
        }
        const data = await response.json();
        setLangShare(data.totalLangShare);
        setLangColorMap(data.colorMap);
        Cookies.set("totalLangShare", JSON.stringify(data.totalLangShare), {
          expires: 10 / (24 * 60),
        });
        Cookies.set("colorMap", JSON.stringify(data.colorMap), {
          expires: 10 / (24 * 60),
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const cachedLangShare = Cookies.get("totalLangShare");
    const cachedLangColorMap = Cookies.get("colorMap");

    if (cachedLangShare && cachedLangColorMap) {
      setLangShare(JSON.parse(cachedLangShare));
      setLangColorMap(JSON.parse(cachedLangColorMap));
      setLoading(false);
    } else {
      fetchData();
    }
  }, []);

  if (loading) {
    return (
      <section className="p-5 md:p-10">
        <div className="container p-5 mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-popins">
            <a
              href="https://github.com/sreekesh-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB{" "}
            </a>
            <span className="text-violet-500">STATS</span>
          </h1>
          <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5 animate-pulse ">
            <FaInfoCircle className="inline mb-[.2rem] mr-2 animate-ping" />
            Loading your GitHub stats...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-5 md:p-10">
        <div className="container p-5 mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-popins">
            <a
              href="https://github.com/sreekesh-k"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB{" "}
            </a>
            <span className="text-violet-500">STATS</span>
          </h1>
          <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5 ">
            <FaInfoCircle className="inline mb-[.2rem] mr-2 " />
            An error occurred: {error} , please try refreshing the page!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="p-5 md:p-10">
      <div className="container p-5 mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-popins">
          <a
            href="https://github.com/sreekesh-k"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB{" "}
          </a>
          <span className="text-violet-500">STATS</span>
        </h1>
        <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5">
          <FaInfoCircle className="inline mb-[.2rem] mr-2" />
          This shows most used languages on my personal{" "}
          <a
            href="https://github.com/sreekesh-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-500 uppercase"
          >
            GitHub
          </a>{" "}
          profile.
        </p>
        <div className="flex flex-row gap-[.3rem] md:gap-4 h-56 md:h-96">
          {Object.keys(langShare).map((language, index) => (
            <div
              key={index}
              className="flex flex-col items-center h-full justify-end"
            >
              <div
                className="w-6 md:w-12 xl:w-16 rounded-t-sm md:rounded-t-md shadow-sm"
                style={{
                  height: `${langShare[language]}%`,
                  maxHeight: "100%",
                  backgroundColor: langColorMap[language]?.color || "#000000",
                }}
              ></div>
              <span className="mt-2 text-[.5rem] md:text-[.6rem] xl:text-xs font-semibold">
                {language}
              </span>
              <span className="text-[.4rem] md:text-[.5rem] xl:text-xs font-semibold">
                {langColorMap[language]?.percentage || "0.00"}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
