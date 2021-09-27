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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  computed: {
    teachers () {
      return this.$store.state.app.teachers
    }
  },
  methods: {
    async getTeacherList ({limit=10,offset=0}) {
      const { data } = await teacherService.getTeacherList({ limit, offset })
      this.teachers = data
    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    }
  }
}
