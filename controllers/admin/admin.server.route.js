var express = require('express');
var router = express.Router();

var adminController = require("./admin.server.controller");
/**
 * Get home page
 */
router.get('/admin', (req, res, next) => {
  res.jsonp(adminController.getAll());
});

module.exports = router;
