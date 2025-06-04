const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// In server.js
const apiRoutes = require('./routes/api'); // Make sure this path is correct

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// New comment//