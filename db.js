const Pool = require('pg').Pool

const pool = new Pool({
	host: 'serverpostgresqluhanov.postgres.database.azure.com',
	user: 'sergey',
	password: 'Premium2113',
	database: 'postgres',
	port: 5432,
	ssl: true,
})
module.exports = pool
