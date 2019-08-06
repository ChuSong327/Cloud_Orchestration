import axios from 'axios'

/**
 * Get workflow
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getWorkflow(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { workflowId } = req.params
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_COMPOSE_URL}/workflow/${workflowId}`,
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
 * Create a new workflow
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function createWorkflow(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const url = `${process.env.BACKEND_COMPOSE_URL}/workflow`
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
 * Delete an existing workflow
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function deleteWorkflow(req, res) {
  try {
    const { workflowId } = req.params
    const response = await axios({
      method: 'DELETE',
      url: `${process.env.BACKEND_COMPOSE_URL}/workflow/${workflowId}`,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.status(200).send({
      __meta: {
        message: {
          text: `The Workflow : ${workflowId} has been deleted`,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.status(500).send({
      __meta: {
        message: {
          text: 'Workflow deletion failed',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Function to Update workflow
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function updateWorkflow(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const data = req.body
    const url = `${process.env.BACKEND_COMPOSE_URL}/workfloe`
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
          text: `Workflow ${data.id} updated`,
          type: 'success',
          path: 'global'
        }
      }
    })
  } catch (error) {
    return res.send({
      __meta: {
        message: {
          text: 'Workflow update failed',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}
