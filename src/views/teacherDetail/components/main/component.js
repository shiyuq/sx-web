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
    teachers () {
      return this.$store.state.app.teachers
    }
  },
  watch: {
    teachers: {
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
      if (this.teachers) {
        this.idIndex = this.teachers.findIndex((val) => {
          return val.id === this.$route.params.id;
        })
      }
    }
  }
}
