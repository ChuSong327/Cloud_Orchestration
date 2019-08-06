const axios = require("axios")

export const method_POST = async (url, payload) => {
    try {
        await axios.post(url, { params: payload }).then(res => {
            return res.data
        })
    }
    catch(err) {
        console.log("Error", err)
    }
}