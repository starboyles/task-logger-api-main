const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const { admin, db } = require("./config/firebase.config");

dotenv.config();

const port =  6000;

app.listen(port, () => {
  console.log(`Task Logger running on port ${port}.... `);
});
