export default {
  data () {
    return {
      iscur: 0,
      mList: [
        {
          src: 'xinwendongtai',
          title: '公司新闻'
        },
        {
          src: 'xinwendongtai',
          title: '行业动态'
        }
      ],
      cList: [
        {
          src: '/xinwendongtai/6843937637581979648',
          title: '习近平在深入推动长江经济带发展座谈会上的讲',
          imgUrl: require('./img/xijinping.jpg'),
          content: '这次座谈会是我主持召开的第二次长江经济带发展座谈会。上一次是2016年1月在长江上游的重庆召开，这一次放在长江中游的武汉召开。 推动长江经济带发展是党中央作出的重大决策，...',
          subSrc: '/xinwendongtai/6847157567609634816',
          subTitle: '习近平在中阿合作论坛第八届部长级会议开幕式'
        }
      ],
      list: [
        {
          src: '/xinwendongtai/6843542491682045952',
          title: '会提供哪些教学服务？',
          content: '1 、学习资料 学习期间，我们为学员提供完备的学习资料。其中包含：资料袋、学员代表证、笔、笔记本、光盘（内刻录授课...'
        },
        {
          src: '/xinwendongtai/6843938169323257856',
          title: '有哪些教学模式？',
          content: '成功推出了实景感受、专题教学、现场教学、仪式教学、情景教学、激情教学、音像教学、名篇诵读、拓展体验、信念教育、...'
        }
      ]
    }
  },
  methods: {
    mouseover (index) {
      this.iscur = index
    }
  }
}
