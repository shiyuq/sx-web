import consultService from '@/api/consult-service'

export default {
  data () {
    return {
      name: '',
      phone: '',
      consultInfo: ''
    }
  },
  methods: {
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
        name: this.name,
        phone: this.phone,
        consultInfo: this.consultInfo
      })
      this.$notify.success({
        title: '提交成功',
        message: '客服将会在一个工作日内联系您，请注意电话畅通！'
      })
    }
  }
}
