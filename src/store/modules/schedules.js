/**
 * Store for schedules data
 */

const state = {
  scheduleList: [],
}

const getters = {}

const actions = {
  async getScheduleList({ commit }) {
    try {
      const response = [
        {
          name: 'wf_d_demo_1',
          tatalTask: 0,
          status: 'unpublished'
        },
        {
          name: 'wf_d_sales_operations',
          tatalTask: 1,
          status: 'published'
        }
      ]
      commit("setScheduleList", response)
    }
    catch(error) {
      console.log("Error", error)
    }
  }
}

const mutations = {
  setScheduleList(state, val) {
    state.scheduleList = val
  },
  setScheduleName(state, val) {
    state.scheduleName = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
