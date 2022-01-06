import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import todoStore from './store/todos'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com'
Vue.http.headers.common.Authorization = 'Basic azHjkOJ163JHn25bhj'
Vue.http.interceptors.push(function (request) {
  return (response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  }
})

new Vue({
  router,
  todoStore,
  render: h => h(App)
}).$mount('#app')
