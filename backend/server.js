const express = require('express');
const cors = require('cors');
require('dotenv').config();
const router = express.Router();
const mongoose = require('mongoose');
const techRouter = require('./routes/techRoutes');
const resumeRouter = require('./routes/resumeRoutes')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use('/techs', techRouter);
app.use('/resume', resumeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


