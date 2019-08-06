const axios = require('axios')

/**
 * Get config
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getAccount(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { id } = req.params
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_AUTH_URL}/account/${id}`,
      headers: {
        'Content-type': 'application/json'
        // Authorization: `Bearer ${accessToken}`
      }
    })
    return res.send(response.data)
  } catch (error) {
    return res.send(error)
  }
}

// module.exports = {
//   getAccount
// }
