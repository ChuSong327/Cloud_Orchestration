import express from 'express'
import { authenticationGuard } from '../../middleware/auth'
import { getTask, createTask, updateTask, deleteTask } from './controller'

const router = express.Router({})

router
  .get('/:taskId', authenticationGuard, getTask)
  .post('/create', authenticationGuard, createTask)
  .put('/update', authenticationGuard, updateTask)
  .delete('/:taskId', authenticationGuard, deleteTask)

export default router
