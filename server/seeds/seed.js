// seed.js

const mongoose = require("mongoose");
const connectDB = require("../config/connection.js");
const Question = require("../models/Question.js");
const dotenv = require("dotenv");
const questionsData = require("./questions.js");

// configure .env file
dotenv.config();

// connect to database
connectDB();

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Question.deleteMany({});

    // Insert the questions into the database
    await Question.insertMany(questionsData);

    console.log("Database seeded successfully.");
  } catch (error) {
    console.error("Error seeding database:", error.message);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

seedDatabase();
