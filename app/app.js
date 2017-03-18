var http = require('http');
var myServer = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.write('herro there');
  res.end();
});

myServer.listen(3000);
console.log('goto localhost://3000')