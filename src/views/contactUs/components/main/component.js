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
      des: [
        {
          url: '/rencaizhaopin/',
          title:'人才招聘'
        }
      ],
      cList: [
        {
          content:'地址：新疆阿拉尔市秋收大道1001号'
        },
        {
          content:'电话： 0991-6378522 15083931223'
        },
        {
          content:'邮箱：364361414@qq.com'
        }
      ]
    }
  }
}
