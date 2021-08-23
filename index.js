var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    console.log('request event');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('demonstration for dad');
})

server.on('connection', function() {
    console.log('connection event');
});

server.listen(process.env.PORT || 5000, function() {
    console.log('listen even');
});d