const http = require('http');
const fs = require('fs');
var port = process.env.PORT || 5000;
var server = http.createServer();

server.on('request', function (request, response) {
    // Load CSS
    if (request.url === '/styles/homepage.css') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        fs.createReadStream('styles/homepage.css').pipe(response);
    }
    
    // Load HTML
    fs.readFile('html/homepage.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        return response.end();
    });

});

server.on('connection', function() {
    console.log('connection event');
});

server.listen(port, function() {
    console.log('listen even');
});