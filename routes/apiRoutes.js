// Import required modules
const fs = require('fs'); 
const path = require('path'); 
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router(); 

// GET request for all notes
router.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err; 
        res.json(JSON.parse(data));
    });
});

