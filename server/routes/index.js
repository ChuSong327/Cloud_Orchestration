import configs from './configs'
import tasks from './tasks'
import auth from './auth'
import providers from './providers'
import monitor from './monitor'
import billing from './billing'
import workflows from './workflows'

export const apiRoutes = app => {
  app.use('/configs', configs)
  app.use('/tasks', tasks)
  app.use('/auth', auth)
  app.use('/providers', providers)
  app.use('/monitor', monitor)
  app.use('/billing', billing)
  app.use('/workflows', workflows)
}
