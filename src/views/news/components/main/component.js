export default {
  name: 'Main',
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      titleList: [
        {
          url: '/guanyuwomen',
          title: '公司新闻'
        },
        {
          url: '/guanyuwomen',
          title: '行业动态'
        },
        {
          url: '/guanyuwomen',
          title: '常见问题解答'
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
    }
  }
}
