import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HangMan from '@/components/HangMan'
import FetchAPI from '@/components/FetchAPI'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hangman',
      name: 'HangMan',
      component: HangMan
    },
    {
      path: '/fetch-api',
      name: 'FetchAPI',
      component: FetchAPI
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
