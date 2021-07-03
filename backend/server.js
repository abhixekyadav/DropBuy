const app = require("./app");
// const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

const connectDB = require("./config/db");

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to Uncaught Exception");
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").dotenv.config({ path: "backend/config/config.env" });

// dotenv.config({ path: "backend/config/config.env" });

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Running on PORT: ${process.env.PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
