const Router = require('express')
const router = new Router()
const customerController = require('../controller/customers.controller')

router.post('/customer', customerController.createCustomer)
module.exports = router
