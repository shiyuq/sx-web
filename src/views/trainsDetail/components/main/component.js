import addressService from '../../../../api/address-service'
import trainService from '../../../../api/train-service'
import consultService from '@/api/consult-service'

export default {
  name: 'Main',
  data () {
    return {
      iscur: null,
      train: null,
      addresses: [],
      dList: [
        {
          url: '/peixunxianlu/6847464567841226752',
          title: '丝绸之路五晚六天培训方案',
          src:require('../../../../assets/丝绸之路1.jpg')
        },
        {
          url: '/peixunxianlu/6847464567841226752',
          title: '丝绸之路四晚五天培训方案',
          src:require('../../../../assets/丝绸之路2.jpg')
        }
      ],
      rList: [
        {
          url: '/peixunxianlu/6847464567841226752',
          src: require('../../../../assets/丝绸之路3.jpg'),
          title: '丝绸之路五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847464567841226752',
          src: require('../../../../assets/丝绸之路4.jpg'),
          title: '丝绸之路四晚五天培训方案'
        },
        {
          url: '/peixunxianlu/6847464679711703040',
          src: require('../../../../assets/千鸟湖1.jpg'),
          title: '千鸟湖五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847464679711703040',
          src: require('../../../../assets/千鸟湖2.jpg'),
          title: '千鸟湖四晚五天培训方案'
        }
      ],
      trainId: '',
      name: '',
      phone: '',
      email: '',
      consultInfo: ''
    }
  },
  watch: {
    '$route': 'init'
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      this.trainId = this.$route.params.id
      this.getData()
    },
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
    },
    async submit () {
      if (!this.name) {
        this.$notify.warning({
          title: '提交错误',
          message: '请输入姓名'
        })
        return
      }
      if (!this.phone) {
        this.$notify.warning({
          title: '提交错误',
          message: '请输入手机号'
        })
        return
      }
      if (!this.consultInfo) {
        this.$notify.warning({
          title: '提交错误',
          message: '请输入留言内容'
        })
        return
      }
      await consultService.addConsult({
        trainId: this.trainId,
        name: this.name,
        phone: this.phone,
        email: this.email,
        consultInfo: this.consultInfo
      })
      this.$notify.success({
        title: '提交成功',
        message: '客服将会在一个工作日内联系您，请注意电话畅通！'
      })
    }
  }
}
