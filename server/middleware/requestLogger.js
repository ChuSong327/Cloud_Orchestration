import chalk from 'chalk'
import format from 'date-fns/format'
/**
 * Logging and checking internal requests
 * @param req
 * @param res
 * @param next
 */
module.exports = function requestLogger(req, res, next) {
  setTimeout(() => {
    console.log(
      format(Date(), 'YYYY-MMM-DD HH:MM:SS TZ') +
        ' - ' +
        chalk.green('Request: ' + req.method) +
        ' :: ' +
        chalk.yellow('API: ' + req.originalUrl)
    )
  }, 100)
  next()
}

// // Enable ES6 syntax after correct babel configurations
// export const requestLogger = (req, res, next) => {
//   setTimeout(() => {
//     console.log('\x1b[34m', `[IN] ${req.method}`, '\x1b[0m')
//   }, 100)
//   next()
// }
