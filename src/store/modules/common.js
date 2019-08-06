/**
 * Store for common application settings
 * Non-user related data
 */

const state = {
  isAuthenticated: false,
  appViewState: {
    drawer: false,
  },
  activeColor: 'blue lighten-1',
  isAppLoading: true,
  authenticationRequired: true,
  dialog: false,
  editMode: false
}

const getters = {}

const actions = {
  setAppLoadingState({ commit }, value = false) {
    commit('setAppLoadingState', value)
  },
  setAppViewState({ commit }, value = {}) {
    commit('setAppViewState', { ...state.appViewState, ...value })
  }
}

const mutations = {
  setAppLoadingState(state, value) {
    state.isAppLoading = value
  },
  setAppViewState(state, value) {
    state.appViewState = value
  },
  setAuthenticationRequired(state, value) {
    state.authenticationRequired = value
  },
  toggleDialogState(state) {
    state.dialog = !state.dialog
  },
  changeEditMode(state) {
    state.editMode = !state.editMode
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
