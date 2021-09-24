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
          src: 'peixunlueying1',
          title: '徐长玉教授',
          imgUrl: require('./img/文化馆1.jpg'),
          content:'塔里木大学图书馆馆长，塔里木大学经济研究院常务副院长，阿拉尔市政协委员，中国民主促进会阿拉尔市委副主委，民进塔里木大学总支主委，中国《资本论》研究会理事，阿拉尔市经济学学会理...'
        },
        {
          src: 'peixunlueying1',
          title: '何磊副教授',
          imgUrl: require('./img/文化馆5.jpg'),
          content:'中国阿拉尔市干部学院教学科研部副教授，经济学博士，清华大学在站博士后，清华大学中国农村研究院专职研究人员，塔里木大学西部经济发展研究中心兼职研究人员，阿拉尔市经济发展研...'
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
