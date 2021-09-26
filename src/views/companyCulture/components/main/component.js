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
      isCur:1,
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
      ],
      contentList: [
        {
          content:'不忘初心'
        },
        {
          content:'牢记使命'
        },
        {
          content:'传承红色基因'
        },
        {
          content:'弘扬三五九旅精神'
        }
      ]
    }
  }
}
