// backend/index.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const contactRoutes = require('./routes/contact');
const authRoutes = require('./routes/auth');

app.use('/api/contact', contactRoutes);
app.use('/api/login', authRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
