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
      },
      {
        path: '/peixunlueying',
        name: 'Peixunlueying',
        component: () => import('../views/photo'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/guanyuwomen',
        name: 'Guanyuwomen',
        component: () => import('../views/aboutUs'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/lianxiwomen',
        name: 'Lianxiwomen',
        component: () => import('../views/contactUs'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/rongyuzizhi',
        name: 'Rongyuzizhi',
        component: () => import('../views/honor'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/mingshifengcai',
        name: 'Mingshifengcai',
        component: () => import('../views/teacher'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/yanan',
        name: 'Yanan',
        component: () => import('../views/route/yanan'),
        meta: {title:'培训线路', keepAlive:false}
      },
      {
        path: '/peixunlueying1',
        name: 'Peixunlueying1',
        component: () => import('../views/photo/subPhoto1'),
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
