const db = require('../db')
class ShopController {
	async createShop(req, res) {
		const { name } = req.body
		const newShop = await db.query('INSERT INTO shops (name) values ($1)', [
			name,
		])
		res.json(newShop.rows[0])
	}
	async getShops(req, res) {
		const shops = await db.query('SELECT * FROM shops')
		res.json(shops.rows)
	}
	async getProductsShop(req, res) {
		const id = req.params.id
		const products = await db.query(
			'SELECT * FROM products WHERE shop_id = $1',
			[id]
		)
		res.json(products.rows)
	}
	async deleteShop(req, res) {
		const id = req.params.id
		const shop = await db.query('DELETE FROM shops WHERE id = $1', [id])
		res.json(shop.rows)
	}
}

module.exports = new ShopController()
