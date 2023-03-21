const express = require('express');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/error');
const dotenv = require("dotenv")
const path = require('path');

dotenv.config({path : __dirname+'/config/.env'})

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// app.use(cookieParser());
// app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Not Available');
});

const user = require('./routes/userRoute');
const address = require('./routes/addressRoute');

app.use('/api/v1', user);
app.use('/api/v1', address);
app.use(errorMiddleware);

module.exports = app;