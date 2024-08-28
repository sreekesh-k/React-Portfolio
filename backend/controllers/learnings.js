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
        <title>${fileName}</title>
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
      </body>
      </html>
    `;

    res.send(fullHtml);
  });
};

const getDnsLearnings = (req, res) => {
  getMarkdownFile(req, res, "DNS_Setup_Guide.md");
};

const getDoLearnings = (req, res) => {
  getMarkdownFile(req, res, "DigitalOcean_Backend_Setup_Guide.md");
};

const getSeoLearnings = (req, res) => {
  getMarkdownFile(req, res, "SEO_Optimization_Guide.md");
};

module.exports = {
  getDnsLearnings,
  getDoLearnings,
  getSeoLearnings,
};
