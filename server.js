const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const { admin, db } = require('./config/firebase.config');




const port = 6000;

app.listen(port, () => {
  console.log(`Task Logger running on port ${port}....`);
});
