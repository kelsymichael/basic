const express = require('express');
const reload  = require('reload');
const app     = express();
const stylus = require('stylus');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .set('compress', true)
}
app.use(stylus.middleware({
  src: __dirname + '/views',
  // dest: __dirname + '/public',
  debug: true,
  force: true
  // ,
  // compile: function(str, path){
  //   console.log('compiling');
  //   return stylus(str)
  //     .set('filename', path)
  //     .set('warn', true)
  //     .set('compress', true);
  // }
}))
// express.static allows all routes to have
// acces to what is in the /public folder
app.use(express.static(__dirname + '/public'));
app.use(require('./routes/index'));

var server = app.listen(3000, function(){
  console.log('listening on port 3000');
});

reload(server, app);