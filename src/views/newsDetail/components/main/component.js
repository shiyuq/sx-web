export default {
  name: 'Main',
  data () {
    return {
      idIndex:null,
      introContentList: [
        {
          url: '',
          imgUrl: require('./img/bg1.jpg'),
          content:'延安、西安五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/bg1.jpg'),
          content:'延安、西安五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/bg1.jpg'),
          content:'延安、西安五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/bg1.jpg'),
          content:'延安、西安五晚六天培训方案'
        }
      ],
      contentRightList: [
        {
          url: '',
          title:'同类文章排行',
          uList: [
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            }
          ]
        },
        {
          url: '',
          title:'最新资讯文章',
          uList: [
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            }
          ]
        }
      ]
    }
  },
  created () {
    this.getIdIndex()
  },
  methods: {
    getIdIndex () {
      this.idIndex = this.news.rows.findIndex((val) => {
        return val.id === this.$route.params.id;
      })
    }
  },
  computed: {
    news () {
      return this.$store.state.app.news
    }
  }
}
