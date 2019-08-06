import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'vuetify/src/stylus/main'

Vue.use(Vuetify, {
  theme: {
    primary: '#4080ff', // Primary
    secondary: '#26D1FF', // Secondary
    accent: '#0055CB', // Primary Dark
    error: '#FF6363',  // Failure
    info: '#81AFFF',  // Primary Light
    success: '#5FC673', // Success
    warning: '#FFDA39'  // Warning
  },
  options: {
    customProperties: true
  }
  // iconfont: 'md',
})
