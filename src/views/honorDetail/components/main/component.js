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
      idIndex:null
    }
  },
  computed: {
    certificates () {
      return this.$store.state.app.certificates
    }
  },
  watch: {
    certificates: {
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
      if (this.certificates) {
        this.idIndex = this.certificates.findIndex((val) => {
          return val.id === this.$route.params.id;
        })
      }
    }
  }
}
