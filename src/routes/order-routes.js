const express = require('express')
const router = express.Router()

const controller = require('../controllers/order/order-controller')

router.post('/',controller.post);
router.get('/', controller.listAll);

module.exports = router;