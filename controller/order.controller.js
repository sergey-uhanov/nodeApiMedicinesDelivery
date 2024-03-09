const db = require('../db')
class OrderController {
	async createOrder(req, res) {
		const { id, productData } = req.body
		for (const iterator of productData) {
			const newOrder = await db.query(
				'INSERT INTO product_order ( id_customer,product_name,price,quantity) VALUES ($1, $2, $3, $4)',
				[id, iterator.product.name, iterator.product.price, iterator.pieceCount]
			)
		}

		res.json()
	}
}
module.exports = new OrderController()
