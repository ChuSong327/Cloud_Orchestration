/**
 * Store for marketplace data
 */
import axios from 'axios'

const state = {
  /** Store current available providers
   * Type: Array
   */
  providerList: [],
  /** Store the connection template form mapping info. Not in use. */
  providerTemplateList: []
}

const getters = {}

const actions = {
  /** GET API call to retrieve a list of current providers */
  async getProviderList({ commit }) {
    
    try {
      const response = await axios.get(
        'http://localhost:3001/providers/providerlist'
      )
      commit('setProviderList', response.data)
    } catch (error) {
      console.log('Error', error)
    }
  },
  async getProviderTemplates({ commit }, {templateGroupId}) {
    try {
      const response = await axios.get(
        `http://localhost:3001/providers/config_templates/${templateGroupId}`
      )
      commit('setProviderTemplateList', response.data)

    }
    catch (error) {
      console.log('Error', error)
    }
  }
}

const mutations = {
  setProviderList(state, val) {
    state.providerList = val
  },
  setProviderTemplateList(state, val) {
    state.providerTemplateList = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
