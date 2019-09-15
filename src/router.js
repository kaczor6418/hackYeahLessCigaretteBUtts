import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userPanel',
      name: 'userPanel',
      component: () => import(/* webpackChunkName: "about" */ './views/UserPanel.vue')
    },
    {
      path: '/rewards',
      name: 'rewards',
      component: () => import(/* webpackChunkName: "about" */ './views/Rewards.vue')
    }
  ]
})
