import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'

export default {
  name: 'Main',
  data () {
    return {
      iscur: null,
      train: null,
      addresses: [],
      dList: [
        {
          url: 'peixunxianlu',
          title: '丝绸之路五晚六天培训方案',
          src:require('./img/王母娘娘祭祀1.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '丝绸之路四晚五天培训方案',
          src:require('./img/塔克拉玛干沙漠2.jpg')
        }
      ],
      rList: [
        {
          url: 'peixunxianlu',
          src: require('./img/王母娘娘祭祀1.jpg'),
          title: '丝绸之路五晚六天培训方案'
        },
        {
          url: 'peixunxianlu',
          src: require('./img/塔克拉玛干沙漠2.jpg'),
          title: '丝绸之路四晚五天培训方案'
        },
        {
          url: 'peixunxianlu',
          src: require('./img/2.jpg'),
          title: '千鸟湖五晚六天培训方案'
        },
        {
          url: 'peixunxianlu',
          src: require('./img/3.jpg'),
          title: '千鸟湖四晚五天培训方案'
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
      ]
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
    },
    click (item) {
      this.$router.push({path: '/peixunxianlu', query: { id: item.id }})
    }
  }
}
