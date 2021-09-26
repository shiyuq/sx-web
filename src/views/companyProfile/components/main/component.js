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
      isCur:0,
      des: [
        {
          url: '/qiyejianjie/',
          title:'企业简介'
        },
        {
          url: '/qiyewenhua/',
          title:'企业文化'
        },
        // {
        //   url: '/qiyeshipin/',
        //   title:'企业视频'
        // },
        // {
        //   url: '/fengcai/',
        //   title:'企业风采'
        // },
        {
          url: '/peixunjidi/',
          title:'培训基地'
        }
      ]
    }
  }
}
