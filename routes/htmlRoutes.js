// Import the path
const path = require('path');

// Using express create a new router
const router = require('express').Router();

// Creating the notes route for GET request
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Route for the index.html
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// export router
module.exports = router;
