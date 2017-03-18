var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('<h1>HOME</h1>');
});

app.get('/writings', function(req, res){
  res.send('<h1>WRITINGS</h1>');
});

app.get('/doodles', function(req, res){
  res.send('<h1>DOODLES</h1>');
});

app.get('/about', function(req, res){
  res.send('<h1>ABOUT</h1>');
});

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});
