export default {
  name: 'Main',
  data () {
    return {
      isCur:null,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      titleList: [
        {
          type: '1',
          title: '公司新闻'
        },
        {
          type: '2',
          title: '行业动态'
        },
        {
          type: '3',
          title: '常见问题'
        }
      ]
    }
  },
  computed: {
    news () {
      return this.$store.state.app.news
    }
  },
  created () {
  },
  methods: {
    handleSizeChange () {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange () {
      // console.log(`当前页: ${val}`);
    },
    click (index) {
      this.isCur = index
      this.$store.dispatch('app/setNews', {type: this.titleList[index].type})
    }
  }
}
