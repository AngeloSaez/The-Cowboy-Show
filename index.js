var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    console.log('request event');
    
    fs.readFile('homepage.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('demonstration for dad');
})

server.on('connection', function() {
    console.log('connection event');
});

server.listen(process.env.PORT || 5000, function() {
    console.log('listen even');
});d