import axios from 'axios'

/**
 * Send request to create a new user
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function registerAccount(req, res) {
  try {
    const url = `${process.env.BACKEND_AUTH_URL}/auth/register/account`
    const requestData = req.body
    const response = await axios({
      method: 'POST',
      url,
      data: requestData,
      headers: {
        'Content-type': 'application/json'
      }
    })
    if (response.isError) {
      return res.send({
        __meta: {
          message: {
            text: response.data.payload,
            type: 'error',
            path: 'global'
          }
        }
      })
    }
    // return res.send(req.body)
    return res.send({
      __meta: {
        message: {
          text: 'New Account Registered',
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.send({
      __meta: {
        message: {
          text: 'New Account registration failed',
          type: 'error',
          path: 'global',
        }
      }
    })
  }
}
