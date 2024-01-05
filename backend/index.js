// backend/server.js
const express = require('express');
const cors = require('cors');
const User = require('./models/usersmodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('../backend/connector/dbConnection');
const userRoutes = require('../backend/routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'https://basic-project-nu.vercel.app',
  'https://basic-project-2zs2.vercel.app',
  'http://localhost:3000'
  // Replace with your Vercel frontend URL
  ];
  
  app.use(cors({
    origin: allowedOrigins,
  }));
// app.use(cors());
app.use(express.json());


connectDB();


app.use('/user', userRoutes);


// Define a route for the home route ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Project API');
});

// More routes for reading, updating, and deleting notes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});