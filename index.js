// Constant global variables
const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000;

// Static resources
app.use('/static', express.static(path.join(__dirname, 'public')))

// Create response
app.get('/', (request, response) => {
    response.send('hello world, yo!');
    response.sendFile('homepage.html');
});
  
// Listening event
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});