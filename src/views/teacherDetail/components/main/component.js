import teacherService from '../../../../api/teacher-service'
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
      teachers: null
    }
  },
  created () {
    const id = this.$route.params.id
    if (id) {
      this.getTeacherDetail(id)
    } else {
      this.$message.warning('id获取失败')
    }
  },
  methods: {
    async getTeacherDetail (id) {
      const {data} = await teacherService.getTeacherDetail({id})
      this.teachers = data
    }
  }
}
