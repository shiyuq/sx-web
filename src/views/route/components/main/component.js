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
          url: '/yanan',
          title: '延安、西安五晚六天培训方案',
          src:require('./img/01.jpg')
        },
        {
          url: '/yanan',
          title: '延安、照金、西安六晚七天培训方案',
          src:require('./img/02.jpg')
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
