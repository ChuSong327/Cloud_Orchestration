import axios from 'axios'

/**
 * Get config
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getTask(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { taskId } = req.params
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_COMPOSE_URL}/task/${taskId}`,
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
 * Create a new task
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function createTask(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const url = `${process.env.BACKEND_COMPOSE_URL}/task`
    const data = req.body
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
 * Delete an existing task
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function deleteTask(req, res) {
  try {
    const { taskId } = req.params
    const response = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND_COMPOSE_URL}/task/${taskId}`,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.status(200).send({
      __meta: {
        message: {
          text: `The task : ${taskId} has been deleted`,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.status(500).send({
      __meta: {
        message: {
          text: 'task deletion failed',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Function to Update Task
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function updateTask(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const data = req.body
    const url = `${process.env.BACKEND_COMPOSE_URL}/task`
    const requestOptions = {
      method: 'PUT',
      url,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    }
    if (data) {
      Object.assign(requestOptions, { data })
    }
    const response = await axios(requestOptions)
    // if (!response.data) {
    //   // throw new Error(errorMessages.emptyAxiosResponse)
    //   return res.send('Error in updating the config')
    // }

    return res.send({
      __meta: {
        message: {
          text: `Task ${data.config_id} updated`,
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
