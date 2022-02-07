import cameraService from '../../../../api/camera-service'
import ContactUs from '../../../../components/contactUs'
import RelatedInfo from '../../../../components/relatedInfo'
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
      currentPage4: 4,
      isCur: 0,
      des: [
        {
          url: '/peixunlueying/',
          title:'培训掠影'
        }
      ]
    }
  },
  computed: {
    cameras () {
      return this.$store.state.app.cameras
    }
  },
  methods: {
    async getCameraList ({ limit = 10, offset = 0 }) {
      const { data } = await cameraService.getCameraList({ limit, offset })
      this.cameras = data
    },
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    }
  }
}
