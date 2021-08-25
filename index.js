var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    // Load CSS
    fs.readFile('styles/homepage.css', function(err, data) {;
        response.writeHead(200, {'Content-Type': 'text/css'});
        // response.write(data);
    });
    
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

server.listen(process.env.PORT || 5000, function() {
    console.log('listen even');
});