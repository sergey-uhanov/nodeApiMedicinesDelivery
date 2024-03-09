const express = require('express')
const cors = require('cors')
const shopRouter = require('./routes/shop.routes')
const customer = require('./routes/customer.routes')
const order = require('./routes/order.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', shopRouter)
app.use('/api', customer)
app.use('/api', order)

app.listen(PORT, () => console.log(`server started ${PORT}`))
