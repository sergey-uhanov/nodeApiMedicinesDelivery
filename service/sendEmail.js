const nodemailer = require('nodemailer')
async function sendEmail(name, email, phone, address, orderAmount) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: 'fedorow.nikolay1@gmail.com',
			pass: 'dvnrrwpnnqnbbcfp',
		},
		tls: {
			rejectUnauthorized: false,
		},
	})

	const mailOptions = {
		from: 'fedorow.nikolay1@gmail.com',
		to: email,
		subject: 'New order',
		text: `Hello, ${name}! Your order has been accepted. Order Details:${phone} phone ${address} {address} Order Amount: ${orderAmount}`,
	}

	await transporter.sendMail(mailOptions)
}
module.exports = sendEmail
