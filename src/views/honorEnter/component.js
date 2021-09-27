export default {
  name: 'HonorEnter',
  created () {
    // 当前激活的 tab
    this.$store.commit('app/setCurrentActiveTabIndex', 4)
    this.getCertificateList()
  },
  methods: {
    async getCertificateList () {
      this.$store.dispatch('app/setCertificates', {})
    }
  }
}
