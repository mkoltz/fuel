import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/start.vue'
import Main from './views/main.vue'
import Guide from './views/guide.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path:'/guide/:id',
      name:'guide',
      component: Guide
    }
  ]
})
