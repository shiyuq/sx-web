export default {
  name: 'Main',
  data () {
    return {
      bannerHeight:'',
      iscur:0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      List: [
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title:'延安'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/jb/',
          title:'井冈山'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/ym/',
          title:'遵义'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/fq/',
          title:'西柏坡'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/bw/',
          title:'兰考'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/sj/',
          title:'沂蒙老区'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/gutian/',
          title:'古田'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/linyi/',
          title:'临沂'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/ruijin/',
          title:'瑞金'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/shaoshan/',
          title:'韶山'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/fujian/',
          title:'福建'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/hongyan/',
          title:'红岩'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/hongqiqu/',
          title:'红旗渠'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/wuhan/',
          title:'武汉'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/xinxian/',
          title:'新县'
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/chengxiang/',
          title:'成都'
        }
      ],
      dList: [
        {
          url: '/chanpinzhongxin/js/20181124/85.html',
          title: '延安、西安五晚六天培训方案',
          src:require('./img/01.jpg')
        },
        {
          url: '/chanpinzhongxin/js/20181124/86.html',
          title: '延安、照金、西安六晚七天培训方案',
          src:require('./img/02.jpg')
        }
      ],
      eList: [
        {
          src:require('./img/01.jpg')
        },
        {
          src:require('./img/02.jpg')
        },
        {
          src:require('./img/03.jpg')
        },
        {
          src:require('./img/04.jpg')
        },
        {
          src:require('./img/05.jpg')
        },
        {
          src:require('./img/06.jpg')
        }
      ]
    }
  },
  methods: {
    imgLoad () {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].bannerHeight
      })
    }
  },
  mounted () {
    this.imgLoad();
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.bannerHeight[0].bannerHeight
      this.imgLoad();
    },false)
  }
}
