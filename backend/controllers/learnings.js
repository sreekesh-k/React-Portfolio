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
        <link rel="stylesheet" href="/css/github-markdown.css">
        <style>
          body {
            margin: auto;
            padding: 20px;
          }
          .markdown-body {
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
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
