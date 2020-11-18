const express = require('express')
const router = express.Router()

const controller = require('../controllers/order/order-controller')
const jwtVerify = require('../services/auth-service')
router.post('/',controller.post);
router.get('/', controller.get);
router.get('/total-cashback', jwtVerify.isAuthenticated, controller.)

module.exports = router;