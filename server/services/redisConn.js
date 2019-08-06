// import redis from 'redis'
const redis = require('redis')
const chalk = require('chalk')
// import dotenv from 'dotenv'
// dotenv.config()

const redisClient = redis.createClient()

redisClient.once('connect', () => {
  console.log(chalk.green('Connected to redis: ') + chalk.yellow(`${redisClient.address}: ok`))
})

redisClient.on('error', (error) => {
  console.group(chalk.red('Redis Connection Error'))
  console.error(error)
  console.groupEnd()
})

module.exports = { redisClient }