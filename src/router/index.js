import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/layout'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/home'),
        meta: {title: '首页', keepAlive: false}
      },
      {
        path: '/peixunzhongxin',
        name: 'Peixunzhongxin',
        component: () => import('../views/peixunzhongxin'),
        meta: {title: '首页', keepAlive: false}
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
