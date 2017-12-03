import Vue from 'vue'
import Router from 'vue-router'
import HangMan from '@/components/HangMan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HangMan',
      component: HangMan
    }
  ]
})
