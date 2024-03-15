const db = require('../db')

const sendEmail = require('../service/sendEmail')
class CustomersController {
	async createCustomer(req, res) {
		const { name, email, phone, adress, order_amount } = req.body
		const dateNow = new Date()

		try {
			const newCustomer = await db.query(
				'INSERT INTO customers (name, email, phone, adress, order_date, order_amount) values ($1,$2,$3,$4,$5,$6) RETURNING id',
				[name, email, phone, adress, dateNow, order_amount]
			)

			// Отправка письма на почту с данными нового клиента
			await sendEmail(name, email, phone, adress, order_amount)

			res.json(newCustomer.rows[0])
		} catch (error) {
			console.error('Ошибка при создании клиента:', error)
			res.status(500).json({ error: 'Ошибка при создании клиента' })
		}
	}
}

module.exports = new CustomersController()
