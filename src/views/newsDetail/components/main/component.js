export default {
  name: 'Main',
  data () {
    return {
      idIndex: null,
      introContentList: [
        {
          url: '/peixunxianlu/6847464567841226752',
          imgUrl: require('../../../../assets/丝绸之路1.jpg'),
          content:'丝绸之路五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847464679711703040',
          imgUrl: require('../../../../assets/千鸟湖1.jpg'),
          content:'千鸟湖五天培训方案'
        },
        {
          url: '/peixunxianlu/6847465163252039680',
          imgUrl: require('../../../../assets/文化馆1.jpg'),
          content:'文化馆五晚六天培训方案'
        },
        {
          url: '/peixunxianlu/6847465287726399488',
          imgUrl: require('../../../../assets/沙漠之门1.jpg'),
          content:'沙漠之门四晚五天培训方案'
        }
      ],
      contentRightList: [
        {
          url: '',
          title:'同类文章排行',
          uList: [
            {
              url: '/xinwendongtai/6843938169323257856',
              title:'有哪些教学模式？'
            },
            {
              url: '/xinwendongtai/6843542491682045952',
              title:'会提供哪些教学服务？'
            },
            {
              url: '/xinwendongtai/6843937637581979648',
              title:'习近平在深入推动长江经济带发展座谈会上的讲'
            },
            {
              url: '/xinwendongtai/6847157567609634816',
              title:'习近平在中阿合作论坛第八届部长级会议开幕式'
            }
          ]
        },
        {
          url: '',
          title:'最新资讯文章',
          uList: [
            {
              url: '/xinwendongtai/6843938169323257856',
              title:'有哪些教学模式？'
            },
            {
              url: '/xinwendongtai/6843542491682045952',
              title:'会提供哪些教学服务？'
            },
            {
              url: '/xinwendongtai/6843937637581979648',
              title:'习近平在深入推动长江经济带发展座谈会上的讲'
            },
            {
              url: '/xinwendongtai/6847157567609634816',
              title:'习近平在中阿合作论坛第八届部长级会议开幕式'
            }
          ]
        }
      ]
    }
  },
  computed: {
    news () {
      return this.$store.state.app.news
    }
  },
  watch: {
    news: {
      handler () {
        this.getIdIndex()
      }
    },
    '$route': 'getIdIndex'
  },
  created () {
    this.getIdIndex()
  },
  methods: {
    getIdIndex () {
      if (this.news && this.news.rows) {
        this.idIndex = this.news.rows.findIndex((val) => {
          return val.id === this.$route.params.id;
        })
      }
    }
  }
}
