import Vue from 'vue'
import Router from 'vue-router'
import GuessTheWord from '@/components/GuessTheWord'
import FetchAPI from '@/components/FetchAPI'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GuessTheWord',
      component: GuessTheWord
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

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })
