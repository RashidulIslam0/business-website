const express = require('express');
const router = express.Router();
const Video = require('../models/videoModel');

// POST route to create a new video
router.post('/', async (req, res) => {
  try {
    const  videos  = req.body;
    const newVideo = new Video(videos);
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET route to retrieve all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET route to retrieve a specific video by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.status(404).json({ message: 'Video not found' });
    }
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});





// PUT route to update a specific video by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      // Destructure the properties you want to update from req.body
      const { videoUrl } = req.body;
  
      // Find the video by ID and update its properties
      const updatedVideo = await Video.findByIdAndUpdate(id, { videoUrl }, { new: true });
  
      // Respond with the updated video object
      res.json(updatedVideo);
    } catch (error) {
      // Handle errors
      res.status(400).json({ message: error.message });
    }
  });
  
// DELETE route to delete a specific video by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Video.findByIdAndDelete(id);
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

