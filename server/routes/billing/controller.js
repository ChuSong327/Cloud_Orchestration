/**
 * Get spend by date for the account
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getSpendByDate(req, res) {
  try {
    const { year, month } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_BILLING_URL}/billing_by_date/${year}/${month}`,
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
 * Get total bill for the month by Provider
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getTotalBillForMonthByProvider(req, res) {
  try {
    const { year, month } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_BILLING_URL}/total_bill_month_provider/${year}/${month}`,
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
 * Get total bill for the month
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export async function getTotalBillForMonth(req, res) {
  try {
    const { year, month } = req.params
    // const { accessToken } = req.session.tokens
    const response = await axios({
      method: 'GET',
      url: `${process.env.BACKEND_BILLING_URL}/total_bill_month/${year}/${month}`,
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
