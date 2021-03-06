import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/core/plugins/element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './common/style/style.scss'
import './core/style/init.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
