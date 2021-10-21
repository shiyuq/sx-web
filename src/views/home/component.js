import newsService from '../../api/news-service'
import Swipe from './components/swipe'
import Search from './components/search'
import Sidabaozhang from './components/sidabaozhang'
import Peixunmoshi from './components/peixunmoshi'
import About from './components/about'
import Qiyefengcai from './components/qiyefengcai'
import Peixunxianlu from './components/peixunxianlu'
import Dianhuazixun from './components/dianhuazixun'
import Gongsixinwen from './components/gongsixinwen'

export default {
  name: 'Home',
  components: {
    Swipe,
    Search,
    Sidabaozhang,
    Peixunmoshi,
    About,
    Qiyefengcai,
    Peixunxianlu,
    Dianhuazixun,
    Gongsixinwen
  },
  data() {
    return {
      news: [],
      trends: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData() {
      const [ news, trends ] = await Promise.all([
        newsService.getNewsList({ type: 1, limit: 5, offset: 0 }),
        newsService.getNewsList({ type: 2, limit: 5, offset: 0 })
      ])
      this.news = news && news.data && news.data.rows || []
      this.trends = trends && trends.data && trends.data.rows || []
    }
  }
}
