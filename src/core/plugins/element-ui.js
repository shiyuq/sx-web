// 按需全局引入 ant design vue 组件
import Vue from 'vue'
import {
  Carousel,
  CarouselItem,
  Pagination,
  Breadcrumb,
  BreadcrumbItem,
  Notification,
  Tabs,
  TabPane
} from 'element-ui'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$notify = Notification

