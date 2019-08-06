import { Router } from 'express'
import { authenticationGuard } from '../../middleware/auth'
import {
  getConfig,
  getConfigs,
  createConfig,
  updateConfig,
  deleteConfig
} from './controller'

const router = Router({})

router
  .get('/:configId', authenticationGuard, getConfig)
  .get('/s/:templateGroupId', authenticationGuard, getConfigs)
  .post('/create', authenticationGuard, createConfig)
  .put('/update', authenticationGuard, updateConfig)
  .delete('/:configId', authenticationGuard, deleteConfig)

export default router
