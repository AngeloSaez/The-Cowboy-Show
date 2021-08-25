// Constant global variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Static resources
app.use('/html', express.static('html'));
app.use('/resources', express.static('resources'));
app.use('/styles', express.static('styles'));

// Create response
app.get('/', (request, response) => {
    response.send('hello world, yo!');
    response.sendFile('homepage.html');
});
  
// Listening event
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});