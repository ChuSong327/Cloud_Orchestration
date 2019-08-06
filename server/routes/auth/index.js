/**
 * Route for authentication requests
 * /authentication + request
 */
import { Router } from 'express'

// const { authenticationGuard } = require('../../middleware/auth')

import { registerAccount } from './controller'

const router = Router({})

router.post('/register', registerAccount)

export default router
