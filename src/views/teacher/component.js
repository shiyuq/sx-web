import Banner from './components/banner'
import Main from './components/main'
export default {
  name: 'Teacher',
  components: {
    Banner,
    Main
  },
  created () {
    this.$store.commit('app/setCurrentActiveTabIndex', 3)
  }
}
