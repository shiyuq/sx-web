import RelatedInfo from '../../../../components/relatedInfo'
import ContactUs from '../../../../components/contactUs'
export default {
  name: 'Main',
  components: {
    RelatedInfo,
    ContactUs
  },
  data () {
    return {
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
