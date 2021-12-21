import ContactUs from '../../../../components/contactUs'
import RelatedInfo from '../../../../components/relatedInfo'
import teacherService from '../../../../api/teacher-service'
export default {
  name: 'Main',
  components: {
    ContactUs,
    RelatedInfo
  },
  data () {
    return {
      teachers: [],
      currentPage: 1,
      pagerCount: 10,
      total: 0
    }
  },
  created () {
    this.getTeacherList({limit: 10, offset: 0})
  },
  methods: {
    async getTeacherList ({limit=10,offset=0}) {
      const { data } = await teacherService.getTeacherList({ limit, offset })
      this.total = data && data.totalCount
      this.teachers = (data && data.items) || []
    },
    async changePage (currentPage) {
      await this.getTeacherList({ limit: 10, offset: (currentPage - 1) * 10 })
    }
  }
}
