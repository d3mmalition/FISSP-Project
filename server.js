// server.js (Express server)

const express = require('express');
const app = express();
const port = 5000; // Your desired port number

// Define your API endpoints
app.get('/api/about', (req, res) => {
    // Handle the GET request for the /about route
    // Return the data or component (e.g., JSON data or the About component)
    res.json({ message: 'Welcome to the About page!' });
});

// Add more API endpoints for other routes

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
