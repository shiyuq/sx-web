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
    cameras () {
      return this.$store.state.app.cameras
    }
  },
  watch: {
    cameras: {
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
      if (this.cameras) {
        this.idIndex = this.cameras.findIndex((val) => {
          return val.id === this.$route.params.id;
        })
      }
    }
  }
}
