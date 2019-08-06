/**
 * Store for provider connection configurations
 */
import axios from "axios"

const state = {
  /** Store the connection list for selected provider
   * Type: Array
   */
  connectionList: [],
  /** templateGroupId is used in GET connection list.
   * Type: String
   */
  templateGroupId: '',
  selectedConnectionId: '',
  message: "",
  /** Form Action: CREATE or EDIT */
  formAction: '',
  s3FormInfo: {
    name: "",
    id: "",
    formInput: {
      name: "",
      url: "",
      awsKeyID: "",
      awsSecretKey: "",
      decryptionKey: "",
      comment: ""
    }
  },
  snowflakeFormInfo: {
    name: "",
    id: "",
    formInput: {
      name: "",
      host: "",
      userName: "",
      pwd: "",
      database: "",
      warehouse: "",
      comment: ""
    }
  }
}

const getters = {}

const actions = {
  /** GET API call to retrieve a list of connections
   * @params payload === provider's unique template group ID
   */
  async getConnectionList({ commit }, { templateGroupId }) {
    try {
      const response = await axios.get(
        `http://localhost:3001/configs/s/${templateGroupId}`,
        {
          'Content-type': 'application/json'
        }
      )
      commit('setConnectionList', await response.data)
    } catch (error) {
      console.log(error)
    }
  },
  /** POST API call to submit provider connection info 
   * @params payload === connection form input
  */
  async createConnection({ commit }, payload) {
    try {
      const url = "http://localhost:3001/configs/create"
      const data = {
        "configTemplate": {
          "id": `config_${ payload.templateGroupId }`
        },
        "details": payload.formInput,
        "name": `${ payload.formInput.name }`
      }
      const response = await axios({
        method: "POST",
        url: url,
        data: data,
      })
      if (response.status === 200) {
        commit('setMessage', "Successfully Created")
      }
    }
    catch(error) {
      console.log(error)
    }
  },
  /** PUT API call to submit updated provider connection
   * @params payload === connection form input
   */
  async editConnection({ commit }, payload) {
    try {
      const url = `http://localhost:3001/configs/update`
      const data = {
        "configTemplate": {
          "id": `config_${ payload.templateGroupId }`,
          "name": `${ payload.formInput.name }`
        },
        "details": payload.formInput,
        "name": `${ payload.formInput.name }`,
        "id": `${ payload.configId }`
      }
      const response = await axios({
        method: "PUT",
        url: url,
        data: data
      })
      if (response.status === 200) {
        commit("setMessage", "Successfully Updated")
      }
    }
    catch(error) {
      console.log(error)
    }
  },
  /** DELETE API call to delete a provider connection
   * @params payload === provider connection ID
   */
  async deleteConnection({ commit }, payload) {
    try {
      const url = `http://localhost:3001/configs/${payload.configId}`
      const response = await axios({
        method: "DELETE",
        url: url
      })
      if (response.status === 200) {
        commit("setMessage", "Successfully Delete")
      }
    }
    catch(error) {
      console.log(error)
    }
  },
  /** GET a connection's info
   * Response will be displayed in the connection form
   */
  async getConnectionForm({ commit }, payload) {
    try {
      const url = `http://localhost:3001/configs/${payload.configId}`
      const response = await axios({
        method: "GET",
        url: url
      })
      payload.tempId === "temp1" 
        ? commit("setS3FormInput", response.data) 
        : commit("setSnowflakeFormInput", response.data)
    }
    catch(error) {
      console.log(error)
    }
  }
}

const mutations = {
  // toggleDialogState(state) {
  //   state.dialog = !state.dialog
  // },
  setFormAction(state,val) {
    state.formAction = val
  },
  setConnectionList(state, val) {
    state.connectionList = val
  },
  setTemplateGroupId(state, val) {
    state.templateGroupId = val
  },
  setMessage(state, val) {
    state.message = val
  },
  setSelectedConnectionId(state, val) {
    state.selectedConnectionId = val
  },
  setS3FormInput(state, val) {
    state.s3FormInfo.name = val.name
    state.s3FormInfo.id = val.id
    state.s3FormInfo.formInput = val.details
  },
  clearS3FormInput(state) {
    state.s3FormInfo.formInput = {
      name: "",
      url: "",
      awsKeyID: "",
      awsSecretKey: "",
      decryptionKey: "",
      comment: ""
    }
  },
  setSnowflakeFormInput(state, val) {
    state.snowflakeFormInfo.name = val.name
    state.snowflakeFormInfo.id = val.id
    state.snowflakeFormInfo.formInput = val.details
  },
  clearSnowflakeFormInput(state) {
    state.snowflakeFormInfo.formInput = {
      name: "",
      id: "",
      formInput: {
        name: "",
        host: "",
        userName: "",
        pwd: "",
        database: "",
        warehouse: "",
        comment: ""
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
