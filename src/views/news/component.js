import Banner from './components/banner'
import Main from './components/main'
export default {
  name: 'News',
  components: {
    Banner,
    Main
  },
  created () {
    this.getNewsList()
  },
  methods: {
    async getNewsList () {
      this.$store.dispatch('app/setNews', {})
    }
  }
}
