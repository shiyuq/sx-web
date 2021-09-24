
export default {
  name: 'Product',
  data () {
    return {
      iscur: 0,
      list: [
        {
          url: 'peixunxianlu',
          title: '塔里木河',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '睡胡杨谷',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '三五九旅干部培训中心',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '托木尔峰',
          imgUrl:require('./img/pro_s.png')
        },
        {
          url: 'peixunxianlu',
          title: '文化馆',
          imgUrl:require('./img/pro_s.png')
        }
      ],
      pList: [
        {
          url: 'peixunxianlu',
          title: '塔里木河',
          imgUrl:require('./img/塔里木河.png')
        },
        {
          url: 'peixunxianlu',
          title: '睡胡杨谷',
          imgUrl:require('./img/睡胡杨.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '三五九旅干部培训中心',
          imgUrl:require('./img/三五九旅.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '托木尔峰',
          imgUrl:require('./img/托木尔峰.jpg')
        },
        {
          url: 'peixunxianlu',
          title: '文化馆',
          imgUrl:require('./img/文化馆.jpg')
        }
      ],
      uList: [
        {
          list: [
            {
              imgUrl: require('./img/塔里木河1.png'),
              title: '塔里木河五晚六天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/塔里木河2.png'),
              title: '塔里木河四晚五天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/塔里木河3.png'),
              title: '塔里木河五天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/塔里木河4.png'),
              title: '塔里木河六天培训方案',
              url: 'peixunxianlu'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/睡胡杨1.jpg'),
              title: '睡胡杨四晚五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/睡胡杨2.jpg'),
              title: '睡胡杨五晚六天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/睡胡杨3.jpg'),
              title: '睡胡杨四晚五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/睡胡杨4.jpg'),
              title: '睡胡杨五天培训专题',
              url: 'peixunxianlu'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/三五九旅1.jpg'),
              title: '三五九旅五晚六天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/三五九旅2.jpg'),
              title: '三五九旅四晚五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/三五九旅3.jpg'),
              title: '三五九旅五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/三五九旅4.jpg'),
              title: '三五九旅四晚五天培训专题',
              url: 'peixunxianlu'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/托木尔峰1.jpg'),
              title: '托木尔峰四晚五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/托木尔峰2.jpg'),
              title: '托木尔峰五天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/托木尔峰3.jpg'),
              title: '托木尔峰五晚六天培训专题',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/托木尔峰4.jpg'),
              title: '托木尔峰四晚五天培训专题',
              url: 'peixunxianlu'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/文化馆1.jpg'),
              title: '文化馆五晚六天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/文化馆2.jpg'),
              title: '文化馆五天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/文化馆3.jpg'),
              title: '文化馆四晚五天培训方案',
              url: 'peixunxianlu'
            },
            {
              imgUrl: require('./img/文化馆4.jpg'),
              title: '文化馆五天培训方案',
              url: 'peixunxianlu'
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
