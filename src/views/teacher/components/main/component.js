export default {
  name: 'Main',
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      List: [
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
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html',
          title: '徐长玉教授',
          imgUrl: require('./img/01.jpg'),
          content:'延安大学图书馆馆长，延安大学陕北区域经济研究院常务副院长，延安市政协委员，中国民主促进会延安市委副主委，民进延安大学总支主委，中国《资本论》研究会理事，陕西经济学学会理...'
        },
        {
          src: 'http://sxhscc.cn/a/chanpinzhongxin/js/20181124/85.html',
          title: '何磊副教授',
          imgUrl: require('./img/02.jpg'),
          content:'中国延安干部学院教学科研部副教授，经济学博士，清华大学在站博士后，清华大学中国农村研究院专职研究人员，西北大学西部经济发展研究中心兼职研究人员，陕西中城经济发展研...'
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
