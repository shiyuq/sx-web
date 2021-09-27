export default {
  name: 'PhotoEnter',
  created () {
    // 当前激活的 tab
    this.$store.commit('app/setCurrentActiveTabIndex', 2)
    this.getCameraList()
  },
  methods: {
    async getCameraList () {
      this.$store.dispatch('app/setCameras', {})
    }
  }
}
