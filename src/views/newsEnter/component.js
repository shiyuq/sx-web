export default {
  name: 'NewsEnter',
  created () {
    // 当前激活的 tab
    this.$store.commit('app/setCurrentActiveTabIndex', 5)
    this.getNewsList()
  },
  methods: {
    async getNewsList () {
      this.$store.dispatch('app/setNews', {})
    }
  }
}
