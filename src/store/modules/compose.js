/**
 * Store for workflow compose data
 */

const state = {
  cronSchedule: "",
  dataPalette: [  
    { 
      key: "1", 
      configGroupId: "temp1", 
      jobName: "Untitled Job", 
      status: "New", 
      provider: "S3", 
      jobSource: "", 
      jobTarget: "", 
      jobSql: "" 
    },
    { 
      key: "3", 
      configGroupId: "temp3",  
      jobName: "Untitled Job", 
      status: "New", 
      provider: "Snowflake", 
      jobSql: "", 
      jobSource: "", 
      jobTarget: "" 
    }
  ],
  scheduleObj: {
    name: "",
    schedule: "",
    taskHierarchy: {
      jobs:[
        {
          key: "32",
          jobName: "job1",
          jobConnection: {
            id: 12345,
            name: "connection1"
          },
          actionSelected: "",
          jobSql: "select * from 1",
          jobSource: "",
          jobTarget: "",
          status: "Success",
          provider:"Snowflake"
        },
        {
          key: "13",
          jobName: "job2",
          jobConnection: {
            id: 4567,
            name: "connection2"
          },
          actionSelected: "Move",
          jobSql: "",
          jobSource: "from here",
          jobTarget: "to there",
          status: "Running",
          provider:"S3"
        }
      ],
      links:[
        {
          from: "32",
          to: "13"
        }
      ]
    }
  }
}

const getters = {}

const actions = {
  async postSchedule({ commit }, payload) {
    console.log("this is the payload", payload)
    try {
      const url = ""
      const data = {

      }
    }
    catch(error) {
      console.log(error)
    }
  },
  async getSchedule({ commit }, payload) {
    try {
      const url = ""
    }
    catch(error) {
      console.log(error)
    }
  }
}

const mutations = {
  updateCronSchedule(state, val) {
    state.cronSchedule = val
  },
  updateExistingJob(state, val) {
    state.scheduleObj.taskHierarchy.jobs.forEach(el => {
      if (el.key === val.key) {
        Object.assign(el, val)
      }
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
