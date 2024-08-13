//load required modules
const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


// init express app and define port
const app = express();
const PORT = process.env.PORT || 3001;

// middleware for JSON and URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware to allow the public directory to be accessed directly via browser
app.use(express.static('public'));

// setting up the routes for API requests using apiRoutes
app.use('/api', apiRoutes);

// setting up the routes for the html requests using htmlRoutes
app.use('/', htmlRoutes);

// start server and give console log that the server is listening and on the port it is listneing
app.listen(PORT, () =>{
    console.log(`You are now connected! Server is listening on port ${PORT}`)
})