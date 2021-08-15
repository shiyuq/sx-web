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
        path: '/peixunxianlu',
        name: 'Peixunxianlu',
        component: () => import('../views/route'),
        meta: {title:'培训线路', keepAlive:false}
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
