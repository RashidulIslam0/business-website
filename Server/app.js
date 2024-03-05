

const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");




const app = express();
const PORT = 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/business ");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); 
  }
};






app.get("/", (req, res) => {
  res.send("Hello World");
});

// 404 Error Handling
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

// Start server
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectDB(); // Connect to MongoDB
});
