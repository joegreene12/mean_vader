var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./ninjaturtle.json');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(json);
  res.end();


}).listen(5000);

console.log('api server is ready')
