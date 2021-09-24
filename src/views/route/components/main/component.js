import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'
export default {
  name: 'Main',
  data () {
    return {
      isCur: null,
      addresses: [],
      dList: [
        {
          url: '/peixunxianlu/6847098381030916096',
          title: '丝绸之路五晚六天培训方案',
          src:require('../../../../assets/丝绸之路1.jpg')
        },
        {
          url: '/peixunxianlu/6847098381030916096',
          title: '丝绸之路四晚五天培训方案',
          src:require('../../../../assets/丝绸之路2.jpg')
        }
      ],
      filterTrains: [],
      queryId: ''
    }
  },
  computed: {
    trains () {
      return this.$store.state.app.trains
    }
  },
  watch: {
    trains: {
      handler () {
        this.setTrains()
      }
    }
  },
  async created () {
    this.queryId = this.$route.query.id
    await this.getData()
    this.setTrains()
  },
  methods: {
    flatten (arr) {
      return arr.reduce((a, b) => a.concat(Array.isArray(b) ? this.flatten(b) : b), [])
    },
    click (id) {
      this.queryId = id
      this.filterTrains = this.trains[id]
    },
    setTrains () {
      if (!this.queryId) {
        this.filterTrains = this.flatten(Object.values(this.trains))
      } else {
        this.filterTrains = this.trains[this.queryId]
      }
    },
    async getTrainList ({ limit = 10, offset = 0 }) {
      const { data } = await trainService.getTrainList({ limit, offset })
      this.trains = data
    },
    async getData () {
      const {data} = await addressService.getAddressList()
      this.addresses = data
    }
  }
}
