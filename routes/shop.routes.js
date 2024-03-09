const Router = require('express')
const router = new Router()
const shopController = require('../controller/shop.controller')

router.post('/shop', shopController.createShop)
router.get('/shops', shopController.getShops)
router.get('/products/:id', shopController.getProductsShop)
router.delete('/deleteShop/:id', shopController.deleteShop)

module.exports = router
