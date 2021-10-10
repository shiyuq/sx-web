import trainService from '../../api/train-service'
export default {
  name: 'RecommendTrains',
  data () {
    return {
      recmdTrains:null,
      dList: [
        {
          url: '/peixunxianlu/6847464567841226752',
          title: '丝绸之路五晚六天培训方案',
          src:require('../../assets/丝绸之路1.jpg')
        },
        {
          url: '/peixunxianlu/6847464567841226752',
          title: '丝绸之路四晚五天培训方案',
          src:require('../../assets/丝绸之路2.jpg')
        }
      ]
    }
  },
  methods: {
    async getRecmdTrain ({ limit = 10, offset = 0 }) {
      const { data } = await trainService.getRecmdTrain({ limit, offset })
      this.recmdTrains = data
    }
  }
}
