import { Router } from 'express'
import { authenticationGuard } from '../../middleware/auth'
import {
  getSpendByDate,
  getTotalBillForMonthByProvider,
  getTotalBillForMonth
} from './controller'

const router = Router({})

router
  .get('billing_by_date/:year/:month', authenticationGuard, getSpendByDate)
  .get('total_bill_month_provider/:year/:month', authenticationGuard, getTotalBillForMonthByProvider)
  .get('total_bill_month/:year/:month', authenticationGuard, getTotalBillForMonth)

export default router
