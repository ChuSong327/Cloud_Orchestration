/**
 * Route for providers
 */
import { Router } from 'express'

// const { authenticationGuard } = require('../../middleware/auth')

import {
  getProviders,
  getProviderTemplates,
  getTaskTemplates,
  getTaskTemplateDetails
} from './controller'

const router = Router({})

router.get('/providerlist', getProviders)
router.get('/config_templates/:templateGroupId', getProviderTemplates)
router.get('/task_templates/:templateGroupId', getTaskTemplates)
router.get('/task_templates/details/:taskTemplateId', getTaskTemplateDetails)

export default router

// const { Router } = require('express')
// const pool = require('../../db/mysql')
// // import express from 'express'

// const router = Router()
// // const router = express.Router({})
// const getAppsSQL = 'SELECT * FROM marketplace_apps;'
// router.get('/', (req, res, next) => {
//   pool.query(getAppsSQL, function(error, results) {
//     if (error) return next(error)
//     res.json(results)
//   })
// })

// router.get('/:id', (req, res, next) => {
//   const { id } = req.params
//   pool.query('SELECT * FROM marketplace_apps WHERE id = ?', [id], function(
//     error,
//     results,
//     fields
//   ) {
//     if (error) return next(error)
//     res.json(results)
//   })
// })

// module.exports = router
// export default router
