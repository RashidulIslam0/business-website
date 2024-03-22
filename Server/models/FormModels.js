const mongoose = require('mongoose');

// Define the Mongoose schema
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
 
},{timestamps:true});

// Create a Mongoose model

const Form = mongoose.model("form", formSchema);
module.exports = Form;