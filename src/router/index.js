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
        redirect:'/',
        component: () => import('../views/peixunxianlurukou'),
        children: [
          {
            path: '/',
            name: 'TrainsList',
            component: () => import('../views/peixunxianlu'),
            meta: {title:'培训线路',keepAlive:false}
          },
          {
            path: '/peixunxianlu/:id',
            name: 'TrainsDetail',
            component: () => import('../views/peixunxianluxiangqing'),
            meta: {title:'培训线路详情',keepAlive:false}
          }
        ]
      },
      {
        path: '/peixunlueying',
        name: 'Peixunlueying',
        redirect:'/',
        component: () => import('../views/peixunlueyingrukou'),
        children: [
          {
            path: '/',
            name: 'CameraList',
            component: () => import('../views/peixunlueying'),
            meta: {title:'培训掠影',keepAlive:false}
          },
          {
            path: '/peixunlueying/:id',
            name: 'CameraDetail',
            component: () => import('../views/peixunlueyingxiangqing'),
            meta: {title:'培训掠影详情',keepAlive:false}
          }
        ]
      },
      {
        path: '/guanyuwomen',
        name: 'Guanyuwomen',
        component: () => import('../views/guanyuwomen'),
        meta: { title: '关于我们', keepAlive: false }
      },
      {
        path: '/lianxiwomen',
        name: 'Lianxiwomen',
        component: () => import('../views/lianxiwomen'),
        meta: { title: '联系我们', keepAlive: false }
      },
      {
        path: '/rongyuzizhi',
        name: 'Rongyuzizhi',
        redirect:'/',
        component: () => import('../views/honorEnter'),
        children: [
          {
            path: '/',
            name: 'CertificateList',
            component: () => import('../views/honor'),
            meta: {title:'荣誉资质',keepAlive:false}
          },
          {
            path: '/rongyuzizhi/:id',
            name: 'CertificateDetail',
            component: () => import('../views/honorDetail'),
            meta: {title:'荣誉资质详情',keepAlive:false}
          }
        ]
      },
      {
        path: '/xinwendongtai',
        name: 'Xinwendongtai',
        redirect: '/',
        component: () => import('../views/newsEnter'),
        children: [
          {
            path: '/',
            name: 'NewsList',
            component: () => import('../views/news'),
            meta: { title: '新闻动态', keepAlive: false }
          },
          {
            path: '/xinwendongtai/:id',
            name: 'NewsDetail',
            component: () => import('../views/newsDetail'),
            meta: { title: '新闻动态详情', keepAlive: false }
          }
        ]
      },
      {
        path: '/mingshifengcai',
        name: 'Mingshifengcai',
        redirect: '/',
        component: () => import('../views/teacherEnter'),
        children: [
          {
            path: '/',
            name: 'TeacherList',
            component: () => import('../views/teacher'),
            meta: { title: '名师风采', keepAlive: false }
          },
          {
            path: '/mingshifengcai/:id',
            name: 'TeacherDetail',
            component: () => import('../views/teacherDetail'),
            meta: { title: '名师风采详情', keepAlive: false }
          }
        ]
      },
      {
        path: '/qiyejianjie',
        name: 'Qiyejieshao',
        component: () => import('../views/companyProfile'),
        meta: { title: '企业简介', keepAlive: false }
      },
      {
        path: '/qiyewenhua',
        name: 'Qiyewenhua',
        component: () => import('../views/companyCulture'),
        meta: { title: '企业文化', keepAlive: false }
      },
      {
        path: '/peixunjidi',
        name: 'Peixunjidi',
        component: () => import('../views/productionBase'),
        meta: { title: '培训基地', keepAlive: false }
      },
      {
        path: '/rencaizhaopin',
        name: 'Rencaizhaopin',
        component: () => import('../views/talents'),
        meta: { title: '人才招聘', keepAlive: false }
      },
      {
        path: '/qiyefengcai',
        name: 'Qiyefengcai',
        component: () => import('../views/companyDetail'),
        meta: { title: '企业风采', keepAlive: false }
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
