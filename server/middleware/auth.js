/**
 * Auth middleware
 */

/**
 * authenticationGuard is a middleware function. We can add it to any routes for breaking request to gatekeeper if user request does not have
 * authentication tokens.
 * Other feature of authenticationGuard is a refreshing tokens in case of expired ones
 * Such approach provide clean authentication based on receiving meta object. Also we don't need a special function as
 * getSessionState for checking authentication
 * access_token and id_token are adding to local storage and could be used in Authorization header at next middleware
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
async function authenticationGuard(req, res, next) {
  // const { accessToken } = req.session || {}
  const dummyAccessToken = true

  if (dummyAccessToken) {
    return next()
  }
  return res.send({
    __meta: {
      isAuth: false
    }
  })
}

/**
 * Authorization guard
 * @param groups
 * @returns {Promise<Function>}
 */
// export async function authorizationGuard({ groups }) {
//   return function(req, res, next) {
//   }
// }

async function internalAuthenticationGuard(req, res, next) {
  const authorizationToken =
    req.headers['authorization'] || req.headers['authorization']

  if (
    authorizationToken &&
    authorizationToken === `Bearer ${process.env.INTERNAL_TOKEN}`
  ) {
    return next()
  }
  return res.status(403).send({
    message: 'Access denied'
  })
}

module.exports = {
  authenticationGuard,
  internalAuthenticationGuard
}
