var http = require('http');
var fs = require('fs');
var json = fs.readFileSync('./data.json')

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(json);
  response.end();

}).listen(5000);

console.log('api server is ready')
//know that its running

//
// http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.write(json);
//   res.end();
