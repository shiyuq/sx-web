import newsService from '../../api/news-service'
import trainService from '../../api/train-service'
import Swipe from './components/swipe'
import Search from './components/search'
import Sidabaozhang from './components/sidabaozhang'
import Peixunmoshi from './components/peixunmoshi'
import About from './components/about'
import Qiyefengcai from './components/qiyefengcai'
import Peixunxianlu from './components/peixunxianlu'
import Dianhuazixun from './components/dianhuazixun'
import Gongsixinwen from './components/gongsixinwen'
import Huihuanglicheng from './components/huihuanglicheng'
import WeidaRongyao from './components/weidarongyao'

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
    Gongsixinwen,
    Huihuanglicheng,
    WeidaRongyao
  },
  data() {
    return {
      news: [],
      trends: [],
      questions: [],
      trains: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    async initData() {
      const [ trains, news, trends, questions ] = await Promise.all([
        trainService.getRecmdTrain({ limit: 6 }),
        newsService.getNewsList({ type: 1, limit: 3, offset: 0 }),
        newsService.getNewsList({ type: 2, limit: 3, offset: 0 }),
        newsService.getNewsList({ type: 3, limit: 3, offset: 0 })
      ])
      this.trains = trains && trains.data
      this.news = news && news.data && news.data.rows || []
      this.trends = trends && trends.data && trends.data.rows || []
      this.questions = questions && questions.data && questions.data.rows || []
    }
  }
}
