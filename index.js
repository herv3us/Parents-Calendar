require('dotenv').config();
const config = require('./utilites/config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database... 📋');
  })
  .catch((err) => {
    console.log('There was an error connecting to the database: ', err);
  });

module.exports = app;
