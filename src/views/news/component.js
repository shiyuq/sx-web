import newsService from '../../api/news-service'
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
      const { data } = await newsService.getNewsList()
      this.$store.dispatch('app/setNews', data)
    }
  }
}
