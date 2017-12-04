// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material-design-icons/styles.css'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'
// console.log(Vue.http.headers)
/* eslint-disable no-new */
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
