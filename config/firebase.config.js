const admin = require("firebase-admin");

const serviceAccount = require("../firebase-service-account-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
  // databaseURL: process.env.FIREBASE_DATABASE_URL
});

const db = admin.firestore();
module.exports = { admin, db };




