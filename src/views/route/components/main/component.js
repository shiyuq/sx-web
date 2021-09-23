import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'
export default {
  name: 'Main',
  data () {
    return {
      isCur: null,
      isActive:null,
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
      mapFilterTrains:[],
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
    this.getActive()
    this.getMapFilterTrains()
  },
  methods: {
    click (id) {
      this.isCur = id
      this.filterTrains = { id: this.trains[id] }
    },
    getActive () {
      if (this.$route.query.id) {
        this.isActive = this.$route.query.id
      }
    },
    setTrains () {
      this.filterTrains = this.queryId ? {[this.queryId]: this.trains[this.queryId]} : this.trains
    },
    getMapFilterTrains () {
      if (this.filterTrains) {
        Object.values(this.filterTrains).map(val => {
          if (val) {
            val.map(ele => {
              this.mapFilterTrains.push(ele)
            })
          }
        })
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
