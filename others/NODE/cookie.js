// Import the Express framework
var express = require('express');

// Create an Express application
var app = express();

// Define a route for handling GET requests at the root path '/'
app.get('/',
function(req, res){
  // Set a cookie named 'name' with the value 'express'
  res.cookie('name', 'express').send('Cookie set'); // Sets name = express
});

// Start the Express application and listen on port 3000
app.listen(3000);
