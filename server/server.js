import express from 'express'
const server = express()
// const chalk = require('chalk')
/* Express tools & middleware
 */
import cors from 'cors'
import serveStatic from 'serve-static'
import path from 'path'
import bodyParser from 'body-parser'
import requestLogger from './middleware/requestLogger'
import dotenv from 'dotenv'
import { apiRoutes } from './routes'
// import { getAxiosResponseMeta } from './services/axiosUtils'

dotenv.config()

// import account from './routes/account'
// import configs from './routes/configs'
// import tasks from './routes/tasks'
// import auth from './routes/auth'
// import providers from './routes/providers'

// Apply Midddlewares
server.use('/', serveStatic(path.join(__dirname, '../dist')))
// server.use(express.static('dist'))

server.use(cors())
server.use(bodyParser.json()) // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// TODO move this to a separate file
// server.use((req, res, next) => {
//   return next( console.log( chalk.green('[IN]:' + req.method) + ':' + chalk.yellow(req.url)) )
// })
server.use(requestLogger)

// server.use('/providers', providers)
// server.use('/monitor', monitor)
// server.use('/account', account)
// server.use('/configs', configs)
// server.use('/tasks', tasks)
// server.use('/auth', auth)
// server.use('/providers', providers)

server.use((err, req, res, next) => {
  res.json(err)
})

/**
 * API Routes assignment
 */
apiRoutes(server)

const port = 3001

server.listen(port, () => {
  console.log(`Server has started on port ${port}`)
})
