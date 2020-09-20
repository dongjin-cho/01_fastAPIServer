var express = require('express');
var router = express.Router();
const userController = require('../controllers')

/* GET home page. */
router.get('/', userController.firstPage);
router.post('/customer_insert', userController.post_customer);

module.exports = router;
