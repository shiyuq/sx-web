export default {
  name: 'Main',
  data () {
    return {
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
      cList: [
        {
          id: '01',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html',
          title: '延安、西安五晚六天培训方案',
          imgUrl:require('./img/01.jpg')
        },
        {
          id: '02',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/86.html',
          title: '延安、照金、西安六晚七天培训方案',
          imgUrl:require('./img/02.jpg')
        },
        {
          id: '03',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/87.html',
          title: '延安、照金五晚六天培训方案',
          imgUrl:require('./img/03.jpg')
        },
        {
          id: '04',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/88.html',
          title: '延安四晚五天培训方案',
          imgUrl:require('./img/04.jpg')
        },
        {
          id: '05',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/89.html',
          title: '井冈山六天培训专题',
          imgUrl:require('./img/05.jpg')
        },
        {
          id: '06',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/90.html',
          title: '井冈山五天培训专题',
          imgUrl:require('./img/06.jpg')
        },
        {
          id: '07',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/91.html',
          title: '井冈山四天培训专题',
          imgUrl:require('./img/07.jpg')
        },
        {
          id: '08',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/92.html',
          title: '井冈山三天培训专题',
          imgUrl:require('./img/08.jpg')
        },
        {
          id: '09',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/93.html',
          title: '井冈山七天培训专题',
          imgUrl:require('./img/09.jpg')
        },
        {
          id: '10',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/94.html',
          title: '井冈山八天培训专题',
          imgUrl:require('./img/10.jpg')
        },
        {
          id: '11',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/95.html',
          title: '扶贫开发脱贫攻坚五天培训',
          imgUrl:require('./img/11.jpg')
        },
        {
          id: '12',
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/96.html',
          title: '新型职业农民培育五天培训',
          imgUrl:require('./img/12.jpg')
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
      ]
    }
  },
  methods: {
    handleSizeChange() {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange() {
      // console.log(`当前页: ${val}`);
    }
  }
}
