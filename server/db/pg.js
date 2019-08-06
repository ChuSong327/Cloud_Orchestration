const pg = require('pg')
const chalk = require('chalk')
const dotenv = require('dotenv')
dotenv.config()
// const {connectionLimit, host, user, password, database} = require('../../secrets/mysql-configs')

// const pool = mysql.createPool({
//   connectionLimit: connectionLimit,
//   host: host,
//   user: user,
//   password: password,
//   database: database
// })

const pool = pg.createPool({
  connectionLimit: process.env.connectionLimit,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
})

pool.query('SELECT DATABASE() FROM DUAL', function (error, results) {
  if (error) {
    console.log(chalk.red(`${error}`))
  }
  console.log(chalk.green('Connected to mysql db: '), chalk.yellow(`${results[0]["DATABASE()"]}: ok`))
})

module.exports = {
  query: (queryText, params, callback) => {
    return pool.query(queryText, params, callback)
  }}

