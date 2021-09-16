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
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/home',
        redirect: '/',
        component: () => import('../views/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/peixunxianlu',
        name: 'Peixunxianlu',
        component: () => import('../views/route'),
        meta: { title: '培训线路', keepAlive: false }
      },
      {
        path: '/peixunlueying',
        name: 'Peixunlueying',
        component: () => import('../views/photo'),
        meta: { title: '培训掠影', keepAlive: false }
      },
      {
        path: '/guanyuwomen',
        name: 'Guanyuwomen',
        component: () => import('../views/aboutUs'),
        meta: { title: '关于我们', keepAlive: false }
      },
      {
        path: '/lianxiwomen',
        name: 'Lianxiwomen',
        component: () => import('../views/contactUs'),
        meta: { title: '联系我们', keepAlive: false }
      },
      {
        path: '/rongyuzizhi',
        name: 'Rongyuzizhi',
        component: () => import('../views/honor'),
        meta: { title: '荣誉资质', keepAlive: false }
      },
      {
        path: '/xinwendongtai',
        redirect: '/xinwendongtai',
        component: () => import('../views/Test.vue'),
        children: [
          {
            path: '/',
            name: 'Xinwendongtai',
            component: () => import('../views/news'),
            meta: { title: '新闻动态', keepAlive: false }
          },
          {
            path: '/xinwendongtai/:id',
            name: 'NewsDetail',
            component: () => import('../views/subPhoto1'),
            meta: { title: '新闻动态详情', keepAlive: false }
          }
        ]
      },
      {
        path: '/mingshifengcai',
        name: 'Mingshifengcai',
        component: () => import('../views/teacher'),
        meta: { title: '名师风采', keepAlive: false }
      },
      {
        path: '/yanan',
        name: 'Yanan',
        component: () => import('../views/route/yanan'),
        meta: { title: '延安', keepAlive: false }
      },
      {
        path: '/peixunlueying1',
        name: 'Peixunlueying1',
        component: () => import('../views/photo/subPhoto1'),
        meta: { title: '培训掠影1', keepAlive: false }
      },
      {
        path: '/qiyejianjie',
        name: 'Qiyejieshao',
        component: () => import('../views/aboutUs/companyProfile'),
        meta: { title: '企业简介', keepAlive: false }
      },
      {
        path: '/qiyewenhua',
        name: 'Qiyewenhua',
        component: () => import('../views/aboutUs/companyCulture'),
        meta: { title: '企业文化', keepAlive: false }
      },
      {
        path: '/shengchanjidi',
        name: 'Shengchanjidi',
        component: () => import('../views/aboutUs/productionBase'),
        meta: { title: '生产基地', keepAlive: false }
      },
      {
        path: '/rencaizhaopin',
        name: 'Rencaizhaopin',
        component: () => import('../views/contactUs/talents'),
        meta: { title: '人才招聘', keepAlive: false }
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
