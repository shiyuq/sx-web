export default {
  name: 'TrainsEnter',
  created () {
    // 当前激活的 tab
    this.$store.commit('app/setCurrentActiveTabIndex', 1)
    this.getTrainList()
  },
  methods: {
    async getTrainList () {
      this.$store.dispatch('app/setTrains', {})
    }
  }
}
