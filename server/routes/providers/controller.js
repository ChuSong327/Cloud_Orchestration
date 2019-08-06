import axios from 'axios'

/**
 * Get the list of all approved providers
 * @param req
 * @param res
 * @returns {Promise<*>}
 */

export async function getProviders(req, res) {
  try {
   
    // const {accessToken} = req.session.tokens
    const url = `${process.env.BACKEND_COMPOSE_URL}/templates`
   
    const response = await axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // const response = await axios.get(url);
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
 * Get the list of all config templates for a provider
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getProviderTemplates(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const { templateGroupId } = req.params
    console.log(req.params)
    const url = `${process.env.BACKEND_COMPOSE_URL}/template/config_templates/${templateGroupId}`

    const response = await axios({
      method: 'GET',
      url,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.send(response.data)
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      __meta: {
        message: {
          text: 'error',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Get the information about all available task templates for a template group
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getTaskTemplates(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const { templateGroupId } = req.params
    console.log(req.params)
    const url = `${process.env.BACKEND_COMPOSE_URL}/template/task_templates/${templateGroupId}`

    const response = await axios({
      method: 'GET',
      url,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.send(response.data)
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      __meta: {
        message: {
          text: 'error',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}

/**
 * Get the information about a job template
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getTaskTemplateDetails(req, res) {
  try {
    // const {accessToken} = req.session.tokens
    const { taskTemplateId } = req.params
    console.log(req.params)
    const url = `${process.env.BACKEND_COMPOSE_URL}/template/task_template_details/${taskTemplateId}`

    const response = await axios({
      method: 'GET',
      url,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${process.env.TOKEN}`
      }
    })
    return res.send(response.data)
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      __meta: {
        message: {
          text: 'error',
          type: 'error',
          path: 'global'
        }
      }
    })
  }
}
