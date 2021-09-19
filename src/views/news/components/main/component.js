import newsService from '../../../../api/news-service'
export default {
  name: 'Main',
  data () {
    return {
      isCur:null,
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
