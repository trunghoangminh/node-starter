var express = require('express');
var router = express.Router();

var indexController = require('./index.server.controller');
/**
 * Get home page
 */
router.get('/', indexController.getAll);
router.get('/home', indexController.getAll);
router.get('/index', indexController.getAll);

module.exports = router;
