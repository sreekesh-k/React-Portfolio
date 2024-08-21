import React, { useEffect, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
const gh_token = import.meta.env.REACT_APP_GH_TOKEN;

function Skills({ theme }) {
  const [langShare, setLangShare] = useState({});
  const [langColorMap, setLangColorMap] = useState({});

  useEffect(() => {
    const getLanguageChart = async () => {
      const headers = { Authorization: `Bearer ${gh_token}` };
      const response = await fetch("https://api.github.com/user/repos", {
        headers,
      });
      const data = await response.json();

      const repoMap = data.map((val) => ({
        name: val.name,
        langURL: val.languages_url,
      }));
      const repoLangMapPromise = repoMap.map((repo) =>
        fetch(repo.langURL, { headers })
      );
      const responses = await Promise.all(repoLangMapPromise);
      const repoAndLanguages = await Promise.all(
        responses.map((res) => res.json())
      );

      let totalLangShare = [];
      if (repoAndLanguages) {
        totalLangShare = repoAndLanguages.reduce((acc, val) => {
          for (let key in val) {
            const exclusion = ["CSS", "SCSS", "Hack", "Shell"];
            if (exclusion.indexOf(key) !== -1) continue;
            if (acc[key]) acc[key] += val[key];
            else acc[key] = val[key];
          }
          return acc;
        }, {});
        let total = 0;
        for (let k in totalLangShare) total += totalLangShare[k];
        for (let k in totalLangShare)
          totalLangShare[k] = ((totalLangShare[k] / total) * 100).toFixed(2);
      }
      const colorMap = {};
      Object.keys(totalLangShare).forEach((language) => {
        let color;
        do {
          color =
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        } while (colorMap[color] !== undefined);
        colorMap[language] = {
          color,
          percentage: totalLangShare[language],
        };
      });

      setLangShare(totalLangShare);
      setLangColorMap(colorMap);
    };

    getLanguageChart();
  }, [gh_token]);

  return (
    <>
      <section className="p-5 md:p-10">
        <div className="container p-5 mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-popins">
            GITHUB <span className="text-violet-500">STATS</span>
          </h1>
          <p className="gap-2 my-6 text-xs opacity-70 capitalize font-semibold text-justify px-5">
            <FaInfoCircle className="inline mb-[.2rem] mr-2" />
            This shows most used languages On my personal{" "}
            <span className="text-violet-500 uppercase">github</span> profile.
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
                    backgroundColor: langColorMap[language].color,
                  }}
                ></div>
                <span className="mt-2 text-[.6rem] xl:text-xs font-semibold">{language}</span>
                <span className="text-[.5rem] xl:text-xs font-semibold">
                  {langColorMap[language].percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
