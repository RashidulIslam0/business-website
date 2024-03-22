const express = require('express');
const router = express.Router();
const Form = require('../models/FormModels');

// GET all forms
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// CREATE a new forms
router.post('/', async (req, res) => {
    const form = new Form(req.body);
    try {
      const savedForm = await form.save();
      res.status(201).json(savedForm);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });




module.exports = router;