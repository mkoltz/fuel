import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/start.vue'
import Main from './views/main.vue'
import Guide from './views/guide.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
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
  ],
  scrollBehavior (to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }
    else  {
      return {x: 0, y: 0 }
    }
  }
})
