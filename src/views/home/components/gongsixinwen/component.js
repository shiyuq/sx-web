export default {
  props: {
    news: {
      type: Array,
      require: true
    },
    trends: {
      type: Array,
      require: true
    },
    questions: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      iscur: 0,
      mList: [
        {
          src: 'xinwendongtai',
          title: '公司新闻'
        },
        {
          src: 'xinwendongtai',
          title: '行业动态'
        }
      ]
    }
  },
  methods: {
    mouseover (index) {
      this.iscur = index
    }
  }
}
