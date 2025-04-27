const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');  // Import DB connection file
const studentRoutes = require('./routes/studentRoutes');  // Import routes
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
const frontendURL = 'https://studentproject-frontend.onrender.com'; // Local frontend URL (adjust if different)

// Middleware
app.use(cors({
  origin: frontendURL,  // Allow only requests from your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Optional, if using cookies or authentication
}));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/students', studentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
