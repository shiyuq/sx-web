import addressService from '../../../../api/address-service'
export default {
  name: 'Main',
  data () {
    return {
      isCur:null,
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
      filterTrains: []
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
  created () {
    this.getData()
  },
  methods: {
    click (id) {
      this.isCur = id
      this.filterTrains = {id: this.trains[id]}
    },
    setTrains () {
      this.filterTrains = this.trains
    },
    async getData () {
      const {data} = await addressService.getAddressList()
      this.addresses = data
    }
  }
}
