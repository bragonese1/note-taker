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
// POST request for adding a new note
router.post('/notes', (req, res) => {
    // Creating a new note and assign a unique ID to it
    const newNote = { id: uuidv4(), ...req.body };
    // Reading the existing notes from the db.json file
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err,
        data) => {
            if (err) throw err;
            const notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.json(newNote);
            });
        });
});

