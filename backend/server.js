const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = express.Router();
const mongoose = require("mongoose");
const techRouter = require("./routes/techRoutes");
const resumeRouter = require("./routes/resumeRoutes");
const githubRouter = require("./routes/githubRoutes");
const learningsRouter = require("./routes/learningsRoutes");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/techs", techRouter);
app.use("/resume", resumeRouter);
app.use("/github", githubRouter);
app.use("/learnings", learningsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
