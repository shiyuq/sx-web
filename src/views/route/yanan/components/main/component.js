export default {
  name: 'Main',
  data () {
    return {
      iscur: 0,
      isActive:0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      list: [
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
          url: '/yanan',
          title: '延安、西安五晚六天培训方案',
          src:require('./img/01.jpg')
        },
        {
          url: '/yanan',
          title: '延安、照金、西安六晚七天培训方案',
          src:require('./img/02.jpg')
        }
      ],
      rList: [
        {
          url: '',
          src: require('./img/01.jpg'),
          title:'延安、西安五晚六天培训方案'
        },
        {
          url: '',
          src: require('./img/02.jpg'),
          title:'延安、照金、西安六晚七天培训方案'
        },
        {
          url: '',
          src: require('./img/03.jpg'),
          title:'延安、照金五晚六天培训方案'
        },
        {
          url: '',
          src: require('./img/04.jpg'),
          title:'延安四晚五天培训方案'
        }
      ],
      tList: [
        {
          list: [
            {
              contentList: [
                {
                  content: '第一天'
                },
                {
                  content: '上午：各地乘车（机）赴西安（负责人：带班老师）'
                },
                {
                  content:'下午：西安接站（机）后赴延安（负责人：带班老师）'
                }
              ]
            }
          ]
        },
        {
          list: [
            {
              contentList: [
                {
                  content: '第二天'
                },
                {
                  content: '07:30—08:00'
                },
                {
                  content:'早餐（负责人：带班老师）'
                },
                {
                  content:'08:30—11:30'
                },
                {
                  content:'开班仪式（主讲人：全体学员）'
                },
                {
                  content:'专题教学：《党中央在延安十三年》（主讲人：老师授课）'
                },
                {
                  content:'11:30—12:00'
                },
                {
                  content:'午餐（负责人：带班老师）'
                },
                {
                  content:'14:00—15:00'
                },
                {
                  content:'实景感受：王家坪革命旧址（主讲人：讲解员）'
                },
                {
                  content:'现场教学：《毛泽东与毛岸英特殊的父子之情》（主讲人：老师授课） '
                },
                {
                  content:'15:00—17:00'
                },
                {
                  content:'实景感受：延安革命纪念馆（讲解员）'
                },
                {
                  content:'音像教学：《记忆延安城》（全体学员）'
                },
                {
                  content:'17:30—18:00'
                },
                {
                  content:'晚餐（带班老师）'
                }
              ]
            }
          ]
        },
        {
          list: [
            {
              contentList: [
                {
                  content: '第三天'
                },
                {
                  content: '07:30—08:00'
                },
                {
                  content:'早餐（带班老师）'
                },
                {
                  content:'08:30—09:00'
                },
                {
                  content:'仪式教学：四八烈士陵园敬献花圈（讲解员）'
                },
                {
                  content:'09:30—11:00'
                },
                {
                  content:'实景感受：枣园革命旧址（讲解员）'
                },
                {
                  content:'现场教学：《延安窑洞里有马列主义》（老师授课）'
                },
                {
                  content:'实景感受：为人民服务讲话台（全体学员）'
                },
                {
                  content:'名篇诵读：《为人民服务》（全体学员）'
                },
                {
                  content:'11:30—12:40'
                },
                {
                  content:'情景教学：《延安保育院》或红秀《延安 延安》（全体学员）'
                },
                {
                  content:'13:00—13:30'
                },
                {
                  content:'午餐（带班老师）'
                },
                {
                  content:'13:30—18:00'
                },
                {
                  content:'实景感受：延川县梁家河村（习近平总书记曾经插队、担任村支书、生活、工作过的村庄，总书记回延安的第一站，感受梁家河的发展变化及社会主义新农村建设）（讲解员）'
                },
                {
                  content:'现场教学：《习近平的知青岁月和他的群众观》（老师授课）'
                },
                {
                  content:'18:00—18:30'
                },
                {
                  content:'晚餐（带班老师）'
                },
                {
                  content:'19:00—20:30'
                },
                {
                  content:'激情教学：陕北红歌教唱（老师授课）'
                }
              ]
            }
          ]
        },
        {
          list: [
            {
              contentList: [
                {
                  content: '第四天'
                },
                {
                  content: '07:30—08:00'
                },
                {
                  content:'早餐（带班老师）'
                },
                {
                  content:'08:30—10:00'
                },
                {
                  content:'实景感受：杨家岭革命旧址（讲解员）'
                },
                {
                  content:'现场教学：《延安时期水乳交融的党群干群关系》（老师授课）'
                },
                {
                  content:'10:30—12:00'
                },
                {
                  content:'实景感受：延安干部培训学院学习书院（讲解员）'
                },
                {
                  content:'12:00—12:30'
                },
                {
                  content:'午餐（带班老师）'
                },
                {
                  content:'13:00—14:00'
                },
                {
                  content:'实景感受：凤凰山革命旧址（讲解员）'
                },
                {
                  content:'14:30—15:30'
                },
                {
                  content:'实景感受：中共中央西北局纪念馆（讲解员）'
                },
                {
                  content:'16:00—17:00'
                },
                {
                  content:'实景感受：宝塔山（讲解员）'
                },
                {
                  content:'组织生活：重温入党誓词，不忘入党初心（全体学员）'
                },
                {
                  content:'17:30—18:00'
                },
                {
                  content:'晚餐（带班老师）'
                },
                {
                  content:'18:30—20:30'
                },
                {
                  content:'结业典礼（全体学员）'
                }
              ]
            }
          ]
        },
        {
          list: [
            {
              contentList: [
                {
                  content: '第五天'
                },
                {
                  content: '07:00—07:30'
                },
                {
                  content:'早餐（带班老师）'
                },
                {
                  content:'07:30—11:30'
                },
                {
                  content:'文化自信：黄帝陵——中华文明的精神标识（讲解员）'
                },
                {
                  content:'11:30—12:00'
                },
                {
                  content:'午餐（带班老师）'
                },
                {
                  content:'12:00—14:30'
                },
                {
                  content:'乘车返西安（带班老师）'
                },
                {
                  content:'14:30—15:30'
                },
                {
                  content:'实景感受：西安八路军军办事处纪念馆（讲解员）'
                },
                {
                  content:'16:00—17:00'
                },
                {
                  content:'实景感受：西安事变纪念馆（讲解员）'
                },
                {
                  content:'17:30—18:00'
                },
                {
                  content:'晚餐（带班老师）'
                }
              ]
            }
          ]
        },
        {
          list: [
            {
              contentList: [
                {
                  content: '第六天'
                },
                {
                  content: '07:00—07:30'
                },
                {
                  content:'早餐（带班老师）'
                },
                {
                  content:'全天：'
                },
                {
                  content:'送站（机）返程（带班老师）'
                }
              ]
            }
          ]
        }
      ],
      putList: [
        {
          required:'*',
          title: '联系人',
          value:'请填写联系人'
        },
        {
          required:'*',
          title: '手机号码',
          value:'请填写手机号码'
        },
        {
          required:'',
          title: '电子邮件',
          value:'请填写电子邮件'
        }
      ]
    }
  }
}
