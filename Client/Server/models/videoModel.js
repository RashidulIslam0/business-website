const mongoose = require('mongoose');

// Define the Mongoose schema
const videoSchema = new mongoose.Schema({
  videos: {
    type: String,
    required: true,
  }
 
},{timestamps:true});

// Create a Mongoose model

const Video = mongoose.model("video", videoSchema);
module.exports = Video;
