import axios from 'axios'

/**
 * Get the status of all tasks for an account within a time window
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getAllTaskStatus(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const { startTs, endTs } = req.params
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_MONITOR_URL}/task/${startTs}/${endTs}`,
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
 * Get the status of all current workflow runs for an account
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getAllWorkflowRunDetails(req, res) {
  try {
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_MONITOR_URL}/workflow_run_details`,
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
 * Get the status of all current workflow runs for an account within a given time window
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getAllWorkflowRunDetailsByTime(req, res) {
  try {
    const { startTs, endTs } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_MONITOR_URL}/workflow_run_details/${startTs}/${endTs}`,
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
 * Get the DAG for a given workflow
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getWorkflowStatus(req, res) {
  try {
    const { workflowId } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_MONITOR_URL}/workflow_status/${workflowId}`,
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
 * Get the status of all current workflow runs for an account within a given time window
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getAllWorkflowStatusByTime(req, res) {
  try {
    const { startTs, endTs } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_MONITOR_URL}/workflows/${startTs}/${endTs}`,
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

// const pool = require('../../db/mysql')
// module.exports = function getMonitoringInfo (req, res, next) {
//   pool.query('SELECT * FROM MONITORING;', function (error, results, fields) {
//     if (error) return next(error)
//     res.json(results)
//   })
// }

// module.exports = function getMonitoringInfoById (req, res, next) {
//   pool.query('SELECT * FROM MONITORING;', function (error, results, fields) {
//     if (error) return next(error)
//     res.json(results)
//   })
// }
// import pool from '../../db/mysql'
// export function getMonitoringInfo(req, res, next) {
//   pool.query('SELECT * FROM MONITORING;', function(error, results, fields) {
//     if (error) return next(error)
//     res.json(results)
//   })
// }
