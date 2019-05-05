import Vue from 'vue'
import axios from 'axios'

import './plugins/vuetify'
import './plugins/base'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')