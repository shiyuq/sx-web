export default {
  name: 'Product',
  data () {
    return {
      iscur:0,
      list: [
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title: '塔里木河',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/jb/',
          title: '塔克拉玛干',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/ym/',
          title: '胡杨林',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/fq/',
          title: '托木尔峰',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/bw/',
          title: '屯垦纪念馆',
          imgUrl:require('./img/pro_s.png')
        }
      ],
      pList: [
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title: '塔里木河',
          imgUrl:require('./img/bg.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/jb/',
          title: '井冈山',
          imgUrl:require('./img/jinggangshan.jpg')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/ym/',
          title: '遵义',
          imgUrl:require('./img/zunyi.jpg')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/fq/',
          title: '西柏坡',
          imgUrl:require('./img/xibaipo.jpg')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title: '延安',
          imgUrl:require('./img/yanan.jpg')
        }
      ],
      uList: [
        {
          list: [
            {
              imgUrl: require('./img/bg1.png'),
              title: '塔里木河五晚六天培训方案',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/bg2.png'),
              title: '塔里木河五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/86.html'
            },
            {
              imgUrl: require('./img/bg3.png'),
              title: '塔里木河五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/87.html'
            },
            {
              imgUrl: require('./img/bg4.png'),
              title: '塔里木河五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/88.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/jinggangshan-01.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/89.html'
            },
            {
              imgUrl: require('./img/jinggangshan-02.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/90.html'
            },
            {
              imgUrl: require('./img/jinggangshan-03.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/91.html'
            },
            {
              imgUrl: require('./img/jinggangshan-04.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/92.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/zunyi-01.jpg'),
              title: '胡杨林四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/95.html'
            },
            {
              imgUrl: require('./img/zunyi-02.jpg'),
              title: '胡杨林四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/96.html'
            },
            {
              imgUrl: require('./img/zunyi-03.jpg'),
              title: '胡杨林四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/97.html'
            },
            {
              imgUrl: require('./img/zunyi-04.jpg'),
              title: '胡杨林四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/98.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/xibaipo-01.jpg'),
              title: '托木尔峰四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/99.html'
            },
            {
              imgUrl: require('./img/xibaipo-02.jpg'),
              title: '托木尔峰四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/100.html'
            },
            {
              imgUrl: require('./img/xibaipo-03.jpg'),
              title: '托木尔峰四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/101.html'
            },
            {
              imgUrl: require('./img/xibaipo-04.jpg'),
              title: '托木尔峰四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/102.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/yanan-01.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html'
            },
            {
              imgUrl: require('./img/yanan-02.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/86.html'
            },
            {
              imgUrl: require('./img/yanan-03.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/87.html'
            },
            {
              imgUrl: require('./img/yanan-04.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/88.html'
            }
          ]
        }
      ]
    }
  },
  methods: {
    setCurrentIndex (index) {
      this.iscur = index
    }
  }
};
