const express = require('express')
const router = express.Router()
const jwtVerify = require('../services/auth-service')
const controller = require('../controllers/dealer/dealer-controller')

router.post('/',controller.post);
router.get('/:id', controller.get);
router.get('/total-cashback', jwtVerify.isAuthenticated, controller.getAccumulated)

module.exports = router;