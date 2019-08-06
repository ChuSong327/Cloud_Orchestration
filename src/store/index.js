import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import breadcrumbs from "./modules/breadcrumbs"
import auth from './modules/auth'
import marketplace from './modules/marketplace'
import config from './modules/config'
import schedules from './modules/schedules'
import compose from './modules/compose'
import cron from './modules/cron'
// import monitor from './modules/monitor'
// import account from './modules/account'
// import calendar from './modules/calendar'
// import dashboard from './modules/dashboard'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    breadcrumbs,
    auth,
    marketplace,
    config,
    schedules,
    compose,
    cron
    // account,
    // calendar,
    // dashboard,
    // monitor
  }
})
