var http = require('http');

var server = http.createServer(function(request, response){
	console.log('got a request!');
	response.write('Hi!');
	response.end();
});

var port = 3000;
server.listen(port);

console.log('running on port: ' + port)