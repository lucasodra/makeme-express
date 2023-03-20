const express = require('express');
const dotenv = require("dotenv")
const path = require('path');

dotenv.config({path : __dirname+'/config/.env'})

const app = express();

app.get('/', (req, res) => {
  res.send('Not Available');
});

module.exports = app;