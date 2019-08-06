import '@babel/polyfill' 
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

// TODO: Use only one of icon fonts
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
// import AppIcon from '@/components/Common/AppIcon'

// Vue.component('AppIcon', AppIcon)
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Get all the vue/js files in Components/Common Directory
const requireComponent = require.context(
  './components', 
  true,
  /\.vue$/
)
// for each file in the directory, change case to UpperFirst
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  // Register the component globally
  Vue.component(componentName, componentConfig.default || componentConfig)
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
