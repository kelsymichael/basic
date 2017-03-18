var express = require('express');
const reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 3000);

// express.static allows all routes to have
// acces to what is in the /public folder
app.use(express.static('app/public'));
app.use(require('./routes/index'));

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});

reload(server, app);