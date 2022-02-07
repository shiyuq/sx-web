import ContactUs from '../../../../components/contactUs'
import RelatedInfo from '../../../../components/relatedInfo'
import certificateService from '../../../../api/certificate-service'
export default {
  name: 'Main',
  components: {
    ContactUs,
    RelatedInfo
  },
  data () {
    return {
      iscur:0,
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
      tList: [
        {
          src: '/rongyuzizhi',
          title:'荣誉资质'
        }
      ]
    }
  },
  computed: {
    certificates () {
      return this.$store.state.app.certificates
    }
  },
  methods: {
    async getCertificateList ({ limit = 10, offset = 0 }) {
      const { data } = await certificateService.getCertificateList({ limit, offset })
      this.certificates = data
    },
    click (index) {
      this.iscur = index
    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    }
  }
}
