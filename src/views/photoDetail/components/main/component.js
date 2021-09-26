import News from '../../../../components/news'
import RecommendRoute from '../../../../components/recommendRoute'
export default {
  name: 'Main',
  components: {
    News,
    RecommendRoute
  },
  data () {
    return {
      pList: [
        // {
        //   title: '上一篇',
        //   src: '',
        //   content:'培训掠影'
        // },
        // {
        //   title: '下一篇',
        //   src: '',
        //   content:'培训掠影'
        // }
      ]
    }
  }
}
