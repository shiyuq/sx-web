export default {
  name: 'Product',
  data () {
    return {
      iscur: 0,
      list: [
        {
          title: '塔里木河',
          id:'6844897684000604160',
          imgUrl:require('./img/pro_s.png')
        },
        {
          title: '睡胡杨谷',
          id:'6844897388079874048',
          imgUrl:require('./img/pro_s.png')
        },
        {
          title: '三五九旅干部培训中心',
          id:'6844896493044760576',
          imgUrl:require('./img/pro_s.png')
        },
        {
          title: '托木尔峰',
          id:'6844897827353526272',
          imgUrl:require('./img/pro_s.png')
        },
        {
          title: '文化馆',
          id:'6844897950548623360',
          imgUrl:require('./img/pro_s.png')
        }
      ],
      pList: [
        {
          title: '塔里木河',
          id:'6844897684000604160',
          imgUrl:require('./img/塔里木河.png')
        },
        {
          title: '睡胡杨谷',
          id:'6844897388079874048',
          imgUrl:require('./img/睡胡杨.jpg')
        },
        {
          title: '三五九旅干部培训中心',
          id:'6844896493044760576',
          imgUrl:require('./img/三五九旅.jpg')
        },
        {
          title: '托木尔峰',
          id:'6844897827353526272',
          imgUrl:require('./img/托木尔峰.jpg')
        },
        {
          title: '文化馆',
          id:'6844897950548623360',
          imgUrl:require('./img/文化馆.jpg')
        }
      ],
      uList: [
        {
          list: [
            {
              imgUrl: require('./img/塔里木河1.png'),
              title: '塔里木河五晚六天培训方案',
              id:'6844897684000604160'
            },
            {
              imgUrl: require('./img/塔里木河2.png'),
              title: '塔里木河四晚五天培训方案',
              id:'6844897684000604160'
            },
            {
              imgUrl: require('./img/塔里木河3.png'),
              title: '塔里木河五天培训方案',
              id:'6844897684000604160'
            },
            {
              imgUrl: require('./img/塔里木河4.png'),
              title: '塔里木河六天培训方案',
              id:'6844897684000604160'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/睡胡杨1.jpg'),
              title: '睡胡杨四晚五天培训专题',
              id:'6844897388079874048'
            },
            {
              imgUrl: require('./img/睡胡杨2.jpg'),
              title: '睡胡杨五晚六天培训专题',
              id:'6844897388079874048'
            },
            {
              imgUrl: require('./img/睡胡杨3.jpg'),
              title: '睡胡杨四晚五天培训专题',
              id:'6844897388079874048'
            },
            {
              imgUrl: require('./img/睡胡杨4.jpg'),
              title: '睡胡杨五天培训专题',
              id:'6844897388079874048'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/三五九旅1.jpg'),
              title: '三五九旅五晚六天培训专题',
              id:'6844896493044760576'
            },
            {
              imgUrl: require('./img/三五九旅2.jpg'),
              title: '三五九旅四晚五天培训专题',
              id:'6844896493044760576'
            },
            {
              imgUrl: require('./img/三五九旅3.jpg'),
              title: '三五九旅五天培训专题',
              id:'6844896493044760576'
            },
            {
              imgUrl: require('./img/三五九旅4.jpg'),
              title: '三五九旅四晚五天培训专题',
              id:'6844896493044760576'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/托木尔峰1.jpg'),
              title: '托木尔峰四晚五天培训专题',
              id:'6844897827353526272'
            },
            {
              imgUrl: require('./img/托木尔峰2.jpg'),
              title: '托木尔峰五天培训专题',
              id:'6844897827353526272'
            },
            {
              imgUrl: require('./img/托木尔峰3.jpg'),
              title: '托木尔峰五晚六天培训专题',
              id:'6844897827353526272'
            },
            {
              imgUrl: require('./img/托木尔峰4.jpg'),
              title: '托木尔峰四晚五天培训专题',
              id:'6844897827353526272'
            }
          ]
        },
        {
          list: [
            {
              imgUrl: require('./img/文化馆1.jpg'),
              title: '文化馆五晚六天培训方案',
              id:'6844897950548623360'
            },
            {
              imgUrl: require('./img/文化馆2.jpg'),
              title: '文化馆五天培训方案',
              id:'6844897950548623360'
            },
            {
              imgUrl: require('./img/文化馆3.jpg'),
              title: '文化馆四晚五天培训方案',
              id:'6844897950548623360'
            },
            {
              imgUrl: require('./img/文化馆4.jpg'),
              title: '文化馆五天培训方案',
              id:'6844897950548623360'
            }
          ]
        }
      ]
    }
  },
  methods: {
    setCurrentIndex (index) {
      this.iscur = index
    },
    click (item) {
      this.$router.push({path: '/peixunxianlu', query: { id: item.id }})
    }
  }
};
