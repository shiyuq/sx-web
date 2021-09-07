export default {
  name: 'Product',
  data () {
    return {
      iscur:0,
      list: [
        {
          url: 'peixunxianlu',
          title: '塔里木河',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '塔克拉玛干',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '胡杨林',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '托木尔峰',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '屯垦纪念馆',
          imgUrl:require('./img/pro_s.png')
        }
      ],
      pList: [
        {
          url: 'peixunxianlu',
          title: '塔里木河',
          imgUrl:require('./img/bg.png')
        },
        {
          url: 'peixunxianlu',
          title: '井冈山',
          imgUrl:require('./img/jinggangshan.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '遵义',
          imgUrl:require('./img/zunyi.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '西柏坡',
          imgUrl:require('./img/xibaipo.jpg')
        },
        {
          url: 'peixunxianlu',
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
              url:'/yanan'
            },
            {
              imgUrl: require('./img/bg3.png'),
              title: '塔里木河五晚六天培训方案',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/bg4.png'),
              title: '塔里木河五晚六天培训方案',
              url:'/yanan'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/jinggangshan-01.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/jinggangshan-02.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/jinggangshan-03.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/jinggangshan-04.jpg'),
              title: '塔克拉玛干六天培训专题',
              url:'/yanan'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/zunyi-01.jpg'),
              title: '胡杨林四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/zunyi-02.jpg'),
              title: '胡杨林四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/zunyi-03.jpg'),
              title: '胡杨林四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/zunyi-04.jpg'),
              title: '胡杨林四天培训专题',
              url:'/yanan'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/xibaipo-01.jpg'),
              title: '托木尔峰四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/xibaipo-02.jpg'),
              title: '托木尔峰四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/xibaipo-03.jpg'),
              title: '托木尔峰四天培训专题',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/xibaipo-04.jpg'),
              title: '托木尔峰四天培训专题',
              url:'/yanan'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/yanan-01.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/yanan-02.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/yanan-03.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'/yanan'
            },
            {
              imgUrl: require('./img/yanan-04.jpg'),
              title: '屯垦纪念馆五晚六天培训方案',
              url:'/yanan'
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
