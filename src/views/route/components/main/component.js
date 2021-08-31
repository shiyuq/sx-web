export default {
  name: 'Main',
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      list: [
        {
          id:'01',
          url: '/chanpinzhongxin/js/',
          title:'延安'
        },
        {
          id:'02',
          url: '/chanpinzhongxin/jb/',
          title:'井冈山'
        },
        {
          id:'03',
          url: '/chanpinzhongxin/ym/',
          title:'遵义'
        },
        {
          id:'04',
          url: '/chanpinzhongxin/fq/',
          title:'西柏坡'
        },
        {
          id:'05',
          url: '/chanpinzhongxin/bw/',
          title:'兰考'
        },
        {
          id:'06',
          url: '/chanpinzhongxin/sj/',
          title:'沂蒙老区'
        },
        {
          id:'07',
          url: '/chanpinzhongxin/gutian/',
          title:'古田'
        },
        {
          id:'08',
          url: '/chanpinzhongxin/linyi/',
          title:'临沂'
        },
        {
          id:'09',
          url: '/chanpinzhongxin/ruijin/',
          title:'瑞金'
        },
        {
          id:'10',
          url: '/chanpinzhongxin/shaoshan/',
          title:'韶山'
        },
        {
          id:'11',
          url: '/chanpinzhongxin/fujian/',
          title:'福建'
        },
        {
          id:'12',
          url: '/chanpinzhongxin/hongyan/',
          title:'红岩'
        },
        {
          id:'13',
          url: '/chanpinzhongxin/hongqiqu/',
          title:'红旗渠'
        },
        {
          id:'14',
          url: '/chanpinzhongxin/wuhan/',
          title:'武汉'
        },
        {
          id:'15',
          url: '/chanpinzhongxin/xinxian/',
          title:'新县'
        },
        {
          id:'16',
          url: '/chanpinzhongxin/chengxiang/',
          title:'成都'
        }
      ],
      cList: [
        {
          id: '01',
          src: '/yanan',
          title: '延安、西安五晚六天培训方案',
          imgUrl:require('./img/01.jpg')
        },
        {
          id: '02',
          src: '/chanpinzhongxin/js/20181124/86.html',
          title: '延安、照金、西安六晚七天培训方案',
          imgUrl:require('./img/02.jpg')
        },
        {
          id: '03',
          src: '/chanpinzhongxin/js/20181124/87.html',
          title: '延安、照金五晚六天培训方案',
          imgUrl:require('./img/03.jpg')
        },
        {
          id: '04',
          src: '/chanpinzhongxin/js/20181124/88.html',
          title: '延安四晚五天培训方案',
          imgUrl:require('./img/04.jpg')
        },
        {
          id: '05',
          src: '/chanpinzhongxin/js/20181124/89.html',
          title: '井冈山六天培训专题',
          imgUrl:require('./img/05.jpg')
        },
        {
          id: '06',
          src: '/chanpinzhongxin/js/20181124/90.html',
          title: '井冈山五天培训专题',
          imgUrl:require('./img/06.jpg')
        },
        {
          id: '07',
          src: '/chanpinzhongxin/js/20181124/91.html',
          title: '井冈山四天培训专题',
          imgUrl:require('./img/07.jpg')
        },
        {
          id: '08',
          src: '/chanpinzhongxin/js/20181124/92.html',
          title: '井冈山三天培训专题',
          imgUrl:require('./img/08.jpg')
        },
        {
          id: '09',
          src: '/chanpinzhongxin/js/20181124/93.html',
          title: '井冈山七天培训专题',
          imgUrl:require('./img/09.jpg')
        },
        {
          id: '10',
          src: '/chanpinzhongxin/js/20181124/94.html',
          title: '井冈山八天培训专题',
          imgUrl:require('./img/10.jpg')
        },
        {
          id: '11',
          src: '/chanpinzhongxin/js/20181124/95.html',
          title: '扶贫开发脱贫攻坚五天培训',
          imgUrl:require('./img/11.jpg')
        },
        {
          id: '12',
          src: '/chanpinzhongxin/js/20181124/96.html',
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
