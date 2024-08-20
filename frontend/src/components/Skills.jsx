import React, { useEffect, useState } from "react";
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
      <section className="p-5 md:p-10 hidden md:block">
        <div className="container p-5 mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-popins text-center w-full">
            MOST USED <span className="text-violet-500">LANGUAGES</span>
          </h1>
          <div className="flex flex-row gap-4 mt-10 h-80 md:h-96">
            {Object.keys(langShare).map((language, index) => (
              <div key={index} className="flex flex-col items-center ">
                <div
                  className="w-8 md:w-12 rounded-md bar"
                  style={{
                    height: `${langShare[language]}%`,
                    maxHeight: "100%",
                    backgroundColor: langColorMap[language].color,
                  }}
                ></div>
                <span className="mt-2 text-xs font-semibold">{language}</span>
                <span className="text-xs font-semibold">
                  {langColorMap[language].percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-5 md:hidden">
        <div className=" container p-5 mx-auto flex flex-col">
          <h1 className="text-4xl md:text-5xl font-popins text-center w-full">
            MOST USED <span className="text-violet-500">LANGUAGES</span>
          </h1>
          <div className="flex flex-col gap-2 mt-10">
            {Object.keys(langShare).map((language, index) => (
              <div key={index} className="flex items-center">
                <span className="w-1/4 text-xs font-semibold">{language}</span>
                <div
                  className="h-8 md:h-10 rounded-md bar"
                  style={{
                    width: `${langShare[language]}%`,
                    maxWidth: "100%",
                    backgroundColor: langColorMap[language].color,
                  }}
                ></div>
                <span className="ml-2 text-xs font-semibold">
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
