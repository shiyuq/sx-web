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
      isCur:4,
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
      cList: [
        {
          id: '01',
          title: '培训基地',
          imgUrl:require('../../../../assets/文化馆1.jpg')
        },
        {
          id: '02',
          title: '培训基地',
          imgUrl:require('../../../../assets/文化馆2.jpg')
        },
        {
          id: '03',
          title: '培训基地',
          imgUrl:require('../../../../assets/丝绸之路2.jpg')
        },
        {
          id: '04',
          title: '培训基地',
          imgUrl:require('../../../../assets/沙漠之门2.jpg')
        }
      ]
    }
  }
}
