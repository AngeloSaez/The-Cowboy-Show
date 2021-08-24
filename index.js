var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    console.log('request event');
    fs.readFile('homepage.html', function(err, data) {
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