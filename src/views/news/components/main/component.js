import newsService from '../../../../api/news-service'
export default {
  name: 'Main',
  data () {
    return {
      isCur: null,
      pagerCount:5,
      titleList: [
        {
          type: '1',
          title: '公司新闻'
        },
        {
          type: '2',
          title: '行业动态'
        },
        {
          type: '3',
          title: '常见问题'
        }
      ]
    }
  },
  computed: {
    news () {
      return this.$store.state.app.news
    }
  },
  created () {
  },
  methods: {
    click (index) {
      this.isCur = index
      // commit 针对的是 同步操作，不涉及接口调用  mutation
      // this.$store.commit('app/setNews', {id: 'syq'})
      // dispatch 针对的是 异步操作，需要调用接口等，然后 再通过同步的 mutation 设置全局数据 actions
      this.$store.dispatch('app/setNews', {type: this.titleList[index].type})
    },
    async getNewsList ({ limit = 10, offset = 0 }) {
      const { data } = await newsService.getNewsList({ limit, offset })
      this.news = data
    },
    async changePage (currentPage) {
      await this.getNewsList({ limit: 10, offset: (currentPage - 1) * 10 })
    }
  }
}
