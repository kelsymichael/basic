const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    poop: 'hey', 
    message: 'hellow there',
    script: '/reload/reload.js'
  });
});

router.get('/writings', function(req, res){
  res.send(`
  <h1>WRITINGSanother</h1>
  <script src='/reload/reload.js'></script>
  `);
});

router.get('/doodles', function(req, res){
  res.send('<h1>DOODLES</h1>');
});

router.get('/about', function(req, res){
  res.send('<h1>ABOUT</h1>');
});

module.exports = router;