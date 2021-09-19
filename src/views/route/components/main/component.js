import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'
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
      ]
    }
  },
  computed: {
    trains () {
      return this.$store.state.app.trains
    }
  },
  async created () {
    await Promise.all([
      this.getAddressList(),
      this.getTrainList()
    ])
  },
  methods: {
    click (id,index) {
      this.isCur = id
      this.$store.dispatch('app/setTrains', {addressId: this.addresses[index].id})
    },
    async getAddressList () {
      const { data } = await addressService.getAddressList()
      this.addresses = data
    },
    async getTrainList () {
      const { data } = await trainService.getTrainList()
      this.trains = data
    }
  }
}
