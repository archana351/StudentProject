const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Import DB connection file
const studentRoutes = require('./routes/studentRoutes');  // Import routes
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5002;

// Use the frontend URL you provided
const frontendURL = 'https://studentproject-frontend.onrender.com';  // Frontend URL

// Middleware for CORS
app.use(cors({
  origin: frontendURL,  // Allow only requests from the frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Optional, if using cookies or authentication
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/students', studentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
