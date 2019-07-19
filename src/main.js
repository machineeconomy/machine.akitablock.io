import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import moment from 'moment'

Vue.use(BootstrapVue)

Vue.config.productionTip = false


Vue.filter('formatTimestampToTime', function (timestamp) {
  if (timestamp) {
    return moment(timestamp).format('HH:mm:ss')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
