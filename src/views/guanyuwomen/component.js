import Banner from './components/banner'
import Main from './components/main'
export default {
  components: {
    Banner,
    Main
  },
  created () {
    this.$store.commit('app/setCurrentActiveTabIndex', 6)
  }
}
