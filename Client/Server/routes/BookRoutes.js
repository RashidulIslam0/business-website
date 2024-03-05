// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const Book = require('../models/BookModels');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// CREATE a new book
router.post('/', async (req, res) => {
    const book = new Book(req.body);
    try {
      const savedBook = await book.save();
      res.status(201).json(savedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });




module.exports = router;
