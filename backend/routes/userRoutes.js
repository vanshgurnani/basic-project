const express = require('express');
const router = express.Router();
const User = require('../models/usersmodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const allowedOrigins = [
  'https://basic-project-nu.vercel.app',
  'https://basic-project-2zs2.vercel.app',
  'http://localhost:3000'
];

// Apply CORS middleware to the router
router.use(cors({
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));


// Registration endpoint
router.post('/registers', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = new User({ username, email, password: hashedPassword });
  
      // Save the user to the database
      await user.save();
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      console.error(error.message);
      res.status(400).json({ error: 'Registration failed' });
    }
  });
  
  router.post('/login', async (req, res) => {
    try {
      
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (user) {
        // Compare the hashed password with the provided password
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          // Generate a JWT token with the user's information
          const token = jwt.sign({userId: user._id, username: user.username }, 'your-secret-key');
  
          res.status(200).json({ message: 'Login successful', token });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });






module.exports = router;