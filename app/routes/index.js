const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
  res.send('<h1>HOME</h1>');
});

router.get('/writings', function(req, res){
  res.send('<h1>WRITINGS</h1>');
});

router.get('/doodles', function(req, res){
  res.send('<h1>DOODLES</h1>');
});

router.get('/about', function(req, res){
  res.send('<h1>ABOUT</h1>');
});

module.exports = router;