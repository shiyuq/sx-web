import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'

export default {
  name: 'Main',
  data () {
    return {
      iscur: 0,
      isActive: 0,
      addresses: [],
      dList: [
        {
          url: '/yanan',
          title: '延安、西安五晚六天培训方案',
          src: require('./img/01.jpg')
        },
        {
          url: '/yanan',
          title: '延安、照金、西安六晚七天培训方案',
          src: require('./img/02.jpg')
        }
      ],
      rList: [
        {
          url: '',
          src: require('./img/01.jpg'),
          title: '延安、西安五晚六天培训方案'
        },
        {
          url: '',
          src: require('./img/02.jpg'),
          title: '延安、照金、西安六晚七天培训方案'
        },
        {
          url: '',
          src: require('./img/03.jpg'),
          title: '延安、照金五晚六天培训方案'
        },
        {
          url: '',
          src: require('./img/04.jpg'),
          title: '延安四晚五天培训方案'
        }
      ],
      putList: [
        {
          required: '*',
          title: '联系人',
          value: '请填写联系人'
        },
        {
          required: '*',
          title: '手机号码',
          value: '请填写手机号码'
        },
        {
          required: '',
          title: '电子邮件',
          value: '请填写电子邮件'
        }
      ],
      train: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      const [{ data: addresses }, { data: train }] = await Promise.all([
        addressService.getAddressList(),
        trainService.getTrainDetail({ id: this.$route.params.id })
      ])
      this.addresses = addresses
      this.train = train
    }
  }
}
