const db = require('../db')
class CustomersController {
	async createCustomer(req, res) {
		const { name, email, phone, adress, order_amount } = req.body
		const dateNow = new Date()
		console.log({ name, email, phone, adress, order_amount })
		const newCustomer = await db.query(
			'INSERT INTO customers (name, email, phone, adress, order_date, order_amount) values ($1,$2,$3,$4,$5,$6)  RETURNING id',
			[name, email, phone, adress, dateNow, order_amount]
		)
		res.json(newCustomer.rows[0])
	}
}
module.exports = new CustomersController()
