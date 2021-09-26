import Banner from './components/banner'
import Main from './components/main'
export default {
  name: 'HonorDetail',
  components: {
    Banner,
    Main
  },
  created () {
    this.$store.commit('app/setCurrentActiveTabIndex', 4)
  }
}
