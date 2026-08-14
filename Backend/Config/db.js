require("dotenv").config();

const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri || mongoUri.includes("<username>") || mongoUri.includes("<password>")) {
  throw new Error(
    "Set MONGODB_URI in backend/.env with your MongoDB Atlas connection string before starting the server.",
  );
}

const connectDatabase = () => mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 10000 });

module.exports = connectDatabase;