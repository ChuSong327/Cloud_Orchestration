import express from 'express'
import { authenticationGuard } from '../../middleware/auth'
import { getWorkflow, createWorkflow, updateWorkflow, deleteWorkflow } from './controller'

const router = express.Router({})

router
  .get('/:workflowId', authenticationGuard, getWorkflow)
  .post('/create', authenticationGuard, createWorkflow)
  .put('/update', authenticationGuard, updateWorkflow)
  .delete('/:workflowId', authenticationGuard, deleteWorkflow)

export default router
