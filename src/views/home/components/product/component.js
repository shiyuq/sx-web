export default {
  name: 'Product',
  data () {
    return {
      iscur:0,
      list: [
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title: '延安',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/jb/',
          title: '井冈山',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/ym/',
          title: '遵义',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/fq/',
          title: '西柏坡',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/bw/',
          title: '兰考',
          imgUrl:require('./img/pro_s.png')
        }
      ],
      pList: [
        {
          url: 'http://sxhscc.cn/a/chanpinzhongxin/js/',
          title: '延安',
          imgUrl:require('./img/yanan.jpg')
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
              imgUrl: require('./img/yanan-01.jpg'),
              title: '延安、西安五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html'
            },
            {
              imgUrl: require('./img/yanan-02.jpg'),
              title: '延安、照金五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/86.html'
            },
            {
              imgUrl: require('./img/yanan-03.jpg'),
              title: '延安、照金、西安六晚七天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/87.html'
            },
            {
              imgUrl: require('./img/yanan-04.jpg'),
              title: '延安四晚五天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/88.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/jinggangshan-01.jpg'),
              title: '井冈山六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/89.html'
            },
            {
              imgUrl: require('./img/jinggangshan-02.jpg'),
              title: '井冈山五天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/90.html'
            },
            {
              imgUrl: require('./img/jinggangshan-03.jpg'),
              title: '井冈山四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/91.html'
            },
            {
              imgUrl: require('./img/jinggangshan-04.jpg'),
              title: '井冈山三天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/jb/20181124/92.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/zunyi-01.jpg'),
              title: '遵义四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/95.html'
            },
            {
              imgUrl: require('./img/zunyi-02.jpg'),
              title: '遵义五天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/96.html'
            },
            {
              imgUrl: require('./img/zunyi-03.jpg'),
              title: '遵义六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/97.html'
            },
            {
              imgUrl: require('./img/zunyi-04.jpg'),
              title: '遵义七天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/ym/20181124/98.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/xibaipo-01.jpg'),
              title: '西柏坡四天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/99.html'
            },
            {
              imgUrl: require('./img/xibaipo-02.jpg'),
              title: '西柏坡五天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/100.html'
            },
            {
              imgUrl: require('./img/xibaipo-03.jpg'),
              title: '西柏坡六天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/101.html'
            },
            {
              imgUrl: require('./img/xibaipo-04.jpg'),
              title: '西柏坡七天培训专题',
              url:'http://sxhscc.cn/a/chanpinzhongxin/fq/20181124/102.html'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/yanan-01.jpg'),
              title: '延安、西安五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html'
            },
            {
              imgUrl: require('./img/yanan-02.jpg'),
              title: '延安、照金五晚六天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/86.html'
            },
            {
              imgUrl: require('./img/yanan-03.jpg'),
              title: '延安、照金、西安六晚七天培训方案',
              url:'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/87.html'
            },
            {
              imgUrl: require('./img/yanan-04.jpg'),
              title: '延安四晚五天培训方案',
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
