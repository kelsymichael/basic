var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(require('./routes/index'));

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});