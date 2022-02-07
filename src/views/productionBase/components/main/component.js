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
      isCur:2,
      des: [
        {
          url: '/qiyejianjie/',
          title:'企业简介'
        },
        {
          url: '/qiyewenhua/',
          title:'企业文化'
        },
        {
          url: '/peixunjidi/',
          title:'培训基地'
        }
      ],
      cList: [
        {
          id: '01',
          title: '培训基地',
          imgUrl:require('./img/一号报告厅.jpg')
        },
        {
          id: '02',
          title: '培训基地',
          imgUrl:require('./img/主题教室.jpg')
        },
        {
          id: '03',
          title: '培训基地',
          imgUrl:require('./img/二号报告厅.jpg')
        },
        {
          id: '04',
          title: '培训基地',
          imgUrl:require('./img/会议室.jpg')
        },
        {
          id: '05',
          title: '培训基地',
          imgUrl:require('./img/培训基地.jpg')
        },
        {
          id: '06',
          title: '培训基地',
          imgUrl:require('./img/学员宿舍.jpg')
        },
        {
          id: '07',
          title: '培训基地',
          imgUrl:require('./img/餐厅.jpg')
        }
      ]
    }
  }
}
