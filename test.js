var http = require('http');

var server = http.createServer(function (request, response) {
  console.log('Llamando al servicio.');
  response.writeHead(200, {"Content-Type": "application/json"});
  var data = { 'message' : 'Hola Caracola' };
  response.end(JSON.stringify(data) + '\n');
});
server.listen(8888);
console.log('Se acabo');

