import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$apiKey = process.env.VUE_APP_apiKey

new Vue({
  render: h => h(App),
}).$mount('#app')
