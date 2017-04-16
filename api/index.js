var express = require('express');
var router = express.Router();
var debug = require('debug')('kennel:api');
var config = require('config');
var task = require('../helper/task');

router.post('/task', function(req, res, next) {
  var result = task.createTask(req.body);
  if (result.error) {
    res.status(500);
  }
  
  res.json(result);
});

router.get('/task/:id', function(req, res, next) {
  res.json({taskId: req.params.id});
});

router.get('/', function(req, res, next) {
  res.json({message: 'HELLO? YES, THIS IS KENNEL.'});
});

module.exports = router;