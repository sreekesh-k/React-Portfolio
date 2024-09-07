const fs = require("fs");
const path = require("path");
const { marked } = require("marked");

const getMarkdownFile = async (req, res, fileName) => {
  const filePath = path.join(__dirname, "..", "public", fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading the markdown file");
    }

    const htmlContent = marked(data);

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sreekesh K Prabhu - Interview Prep</title>
        <link rel="icon" type="image/png" href="https://sreekeshkprabhu.me/logos/sreekeshkprabhu.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.1.0/github-markdown.min.css">
        <style>
          body {
            margin: auto;
            padding: 20px;
          }
          .markdown-body {
            margin-left: auto;
            margin-right: auto;
            padding: 1.25rem;
          } 
          @media (min-width: 640px) {
            .markdown-body {
              max-width: 640px;
            }
          }
          @media (min-width: 768px) {
            .markdown-body {
              max-width: 768px;
            }
          }
          @media (min-width: 1024px) {
            .markdown-body {
              max-width: 1024px;
            }
          }
          @media (min-width: 1280px) {
            .markdown-body {
              max-width: 1280px;
            }
          }
          @media (min-width: 1536px) {
            .markdown-body {
              max-width: 1536px;
            }
          }           
        </style>
      </head>
      <body class="markdown-body">
        ${htmlContent}
         <p style="text-align: center; margin-top: 20px;font-size: 1.5rem;font-weight:bold;">
        Want to know more about me?<br/>
        <a href="https://sreekeshkprabhu.me" target="_blank" rel="noopener noreferrer">Visit my portfolio</a>.
        </p>
      </body>
      </html>
    `;

    res.send(fullHtml);
  });
};

const getHashCheat = (req, res) => {
  getMarkdownFile(req, res, "java_hashmap_hashset_cheat_sheet.md");
};

const getStringCheat = (req, res) => {
  getMarkdownFile(req, res, "java_string_cheat_sheet.md");
};

const getPyFeaturesCheat = (req, res) => {
  getMarkdownFile(req, res, "Python_Features_Syntax_Examples.md");
};
const getPyStringCheat = (req, res) => {
  getMarkdownFile(req, res, "Python_Strings.md");
};
const getPyDsaCheat = (req, res) => {
  getMarkdownFile(req, res, "Python_Data_Structures_Interview.md");
};

module.exports = {
  getStringCheat,
  getHashCheat,
  getPyFeaturesCheat,
  getPyStringCheat,
  getPyDsaCheat,
};
