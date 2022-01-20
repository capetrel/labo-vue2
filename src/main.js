import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type'
Vue.http.headers.common.pragma = 'no-cache'
Vue.http.interceptors.push(function (request) {
  return (response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
