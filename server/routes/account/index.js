// const { Router } = require('express')
// const { authenticationGuard } = require('../../middleware/auth')

import { Router } from 'express'
import { authenticationGuard } from '../../middleware/auth'

// const { getAccount } = require('./controller')
import { getAccount } from './controller'
const router = Router({})

// NOTE - TRY WITH id = acc1
router.get('/:id', authenticationGuard, getAccount)
// .post('/create', authenticationGuard, createAccount)
// .delete('/:configId', authenticationGuard, deleteAccount)
// module.exports = router

export default router
