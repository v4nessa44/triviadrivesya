const express = require("express");
const path = require("path");
const connectDB = require("./config/connection.js");
const routes = require("./routes");
const dotenv = require("dotenv");
const { errorHandler, notFound } = require("./middleware/errorMiddleware.js");
const cors = require("cors");

// configure .env file
dotenv.config();

// connect to database
connectDB();

const PORT = process.env.PORT || 5002;
const app = express();

app.use(cors()); // Use the cors middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// if we're in production, serve client/dist as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

// false url middleware handler
app.use(notFound);

// error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
