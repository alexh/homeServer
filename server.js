var http = require('http');

console.log('Booting up');

var server = http.createServer(function(request, response){
	console.log('got a request!');
	response.write('Hi!');
	response.end();
});

server.listen(3000);