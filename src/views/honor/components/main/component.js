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
      iscur:0,
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
      cList: [
        {
          id: '01',
          src: '/rongyuzizhixiangqing',
          title: '荣誉证书一',
          imgUrl:require('../../../../assets/证书.jpg')
        }
      ],
      tList: [
        {
          src: '/rongyuzizhi',
          title:'荣誉资质'
        },
        {
          src: 'mingshifengcai',
          title:'专业团队'
        }
      ]
    }
  },
  methods: {
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    },
    click (index) {
      this.iscur = index
    }
  }
}
