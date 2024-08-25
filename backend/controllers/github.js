const axios = require('axios');
require("dotenv").config();

exports.getLanguageChart = async (req, res) => {
  const gh_token = process.env.GH_TOKEN;  
  const headers = { Authorization: `Bearer ${gh_token}` };

  try {
    const response = await axios.get("https://api.github.com/user/repos", { headers });
    const data = response.data;

    const repoMap = data.map((val) => ({
      name: val.name,
      langURL: val.languages_url,
    }));

    const repoLangMapPromise = repoMap.map((repo) =>
      axios.get(repo.langURL, { headers })
    );

    const responses = await Promise.all(repoLangMapPromise);
    const repoAndLanguages = responses.map(res => res.data);

    let totalLangShare = {};
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
          "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      } while (colorMap[color] !== undefined);
      colorMap[language] = {
        color,
        percentage: totalLangShare[language],
      };
    });

    res.json({ totalLangShare, colorMap });
  } catch (error) {
    console.error("Error fetching language chart:", error);
    res.status(500).json({ message: "Error fetching language chart" });
  }
};
