import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/components/Home'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['@/components/Login'], resolve)
    },
    {
      path: '/list',
      name: 'List',
      component: (resolve) => require(['@/components/List'], resolve)
    }
  ]
})
