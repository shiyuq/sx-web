export default {
  name: 'TeacherEnter',
  created () {
    // 当前激活的 tab
    this.$store.commit('app/setCurrentActiveTabIndex', 3)
    this.getTeacherList()
  },
  methods: {
    async getTeacherList () {
      this.$store.dispatch('app/setTeachers', {})
    }
  }
}
