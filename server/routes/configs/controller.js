import axios from 'axios'

/**
 * Get the information about a config by passing the configId
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getConfig(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { configId } = req.params
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_COMPOSE_URL}/config/${configId}`,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })

    return res.send(response.data)
  } catch (error) {
    return res.status(error.response.data.status).send({
      __meta: {
        message: {
          text: error.response.data.message,
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}
/**
 * List all configs for a template group
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getConfigs(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { templateGroupId } = req.params
    const url =`${process.env.BACKEND_COMPOSE_URL}/configs/${templateGroupId}`
    const response = await axios({
      method: 'GET',
      url: url,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })

    return res.send(response.data)
  } catch (error) {
    return res.status(error.response.data.status).send({
      __meta: {
        message: {
          text: error.response.data.message,
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Create a new config
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function createConfig(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const url = `${process.env.BACKEND_COMPOSE_URL}/config`
    const data = req.body
    console.log("create data", data)
    const response = await axios({
      method: 'POST',
      url: url,
      data,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    if (response.isError) {
      return res.send({
        __meta: {
          message: { text: 'Response Error', type: 'error', path: 'global' }
        }
      })
    }
    return res.send({
      __meta: {
        message: {
          text: response.data,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.status(error.response.data.status).send({
      __meta: {
        message: {
          text: error.response.data.message,
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Delete an existing config
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function deleteConfig(req, res) {
  try {
    const { configId } = req.params
    const response = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND_COMPOSE_URL}/config/${configId}`,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.status(200).send({
      __meta: {
        message: {
          text: `The config : ${configId} has been deleted`,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {

    return res.status(500).send({
      __meta: {
        message: {
          text: 'Config deletion failed',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Function to Update config
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function updateConfig(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const data = req.body
    const url = `${process.env.BACKEND_COMPOSE_URL}/config`
    const requestOptions = {
      method: 'PUT',
      url,
      data,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    }
    // if (data) {
    //   Object.assign(requestOptions, {data})
    // }
    console.log("requestOptions.data",requestOptions.data)
    const response = await axios(requestOptions)
    console.log("response.data", response.data)
    // if (!response.data) {
    //   // throw new Error(errorMessages.emptyAxiosResponse)
    //   return res.send('Error in updating the config')
    // }

    return res.send({
      __meta: {
        message: {
          text: `Config ${data.name} updated`,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.send({
      __meta: {
        message: { text: 'Config update failed', type: 'error', path: 'global' }
      }
    })
  }
}
