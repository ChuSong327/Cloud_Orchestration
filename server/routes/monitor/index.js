import { Router } from 'express'
import { authenticationGuard } from '../../middleware/auth'
import {
  getAllTaskStatus,
  getAllWorkflowRunDetails,
  getAllWorkflowRunDetailsByTime,
  getWorkflowStatus,
  getAllWorkflowStatusByTime
} from './controller'

const router = Router({})

router
  .get('/:startTs/:endTs', authenticationGuard, getAllTaskStatus)
  .get('/workflow_run_details', authenticationGuard, getAllWorkflowRunDetails)
  .get(
    '/workflow_run_details/:startTs/:endTs',
    authenticationGuard,
    getAllWorkflowRunDetailsByTime
  )
  .get('/workflow/:workflowId', authenticationGuard, getWorkflowStatus)
  .get(
    '/workflow/s/:startTs/:endTs',
    authenticationGuard,
    getAllWorkflowStatusByTime
  )

export default router
