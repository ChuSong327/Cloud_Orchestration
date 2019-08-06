/**
 * Store for auth related data
 */

import axios from "axios"

const state = {}

 const getters = {}

 const actions = {
    async registerUser({ commit }, payload) {
        try { 
            const url = "http://localhost:3001/auth/register"
            const response = await axios({
                method: "POST",
                url: url,
                data: payload
            })
            console.log("Response", response)
        }
        catch(error) {
            console.log(error)
        }
    }
 }

 const mutations = {}

 export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
 }
