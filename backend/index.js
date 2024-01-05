// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const Note = require ('./models/notesmodel');
const User = require('./models/usersmodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const Summary = require('./models/summarymodel');
const connectDB = require('../backend/connector/dbConnection');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://basic-project-nu.vercel.app',
  'https://basic-project-2zs2.vercel.app'
  // Replace with your Vercel frontend URL
  ];
  
  app.use(cors({
    origin: allowedOrigins,
  }));
// app.use(cors());
app.use(express.json());


connectDB();



// Registration endpoint
app.post('/registers', async (req, res) => {
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

app.post('/api/login', async (req, res) => {
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

// Define a route for the home route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Project API');
});

// More routes for reading, updating, and deleting notes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});