import News from '../../../../components/news'
import RecommendRoute from '../../../../components/recommendRoute'
export default {
  name: 'Main',
  components: {
    News,
    RecommendRoute
  },
  data () {
    return {
      idIndex: null
    }
  },
  computed: {
    news () {
      return this.$store.state.app.news
    }
  },
  watch: {
    news: {
      handler () {
        this.getIdIndex()
      }
    },
    '$route': 'getIdIndex'
  },
  created () {
    this.getIdIndex()
  },
  methods: {
    getIdIndex () {
      if (this.news && this.news.rows) {
        this.idIndex = this.news.rows.findIndex((val) => {
          return val.id === this.$route.params.id;
        })
      }
    }
  }
}
