var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    console.log('request event');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end('demonstration for dad');
})

server.on('connection', function() {
    console.log('connection event');
});

server.listen(process.env.PORT || 5000, function() {
    console.log('listen even');
});d