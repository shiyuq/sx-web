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
          url: 'http://sxhscc.cn/a/gongsixinwen/changjianwentijieda/20181124/134.html',
          title:' 会提供哪些教学服务？ '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/changjianwentijieda/20181124/133.html',
          title:' 有哪些教学模式？ '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/xingyedongtai/20181126/158.html',
          title:' 习近平在深入推动长江经济带发展座谈会上的讲 '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/xingyedongtai/20181124/131.html',
          title:' 习近平在中阿合作论坛第八届部长级会议开幕式'
        }
      ],
      cList: [
        {
          id: '01',
          src: '/peixunlueying1',
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
