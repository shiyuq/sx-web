export default {
  name: 'Main',
  data () {
    return {
      isCur:4,
      list: [
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/changjianwentijieda/20181124/134.html',
          title: ' 会提供哪些教学服务？ '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/changjianwentijieda/20181124/133.html',
          title: ' 有哪些教学模式？ '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/xingyedongtai/20181126/158.html',
          title: ' 习近平在深入推动长江经济带发展座谈会上的讲 '
        },
        {
          url: 'http://sxhscc.cn/a/gongsixinwen/xingyedongtai/20181124/131.html',
          title: ' 习近平在中阿合作论坛第八届部长级会议开幕式'
        }
      ],
      des: [
        {
          url: '/qiyejianjie/',
          title:'企业简介'
        },
        {
          url: '/qiyewenhua/',
          title:'企业文化'
        },
        {
          url: '/qiyeshipin/',
          title:'企业视频'
        },
        {
          url: '/fengcai/',
          title:'企业风采'
        },
        {
          url: '/peixunjidi/',
          title:'培训基地'
        }
      ],
      cList: [
        {
          id: '01',
          src: '/yanan',
          title: '培训基地',
          imgUrl:require('./img/bg.jpg')
        },
        {
          id: '02',
          src: '/yanan',
          title: '培训基地',
          imgUrl:require('./img/bg.jpg')
        },
        {
          id: '03',
          src: '/chanpinzhongxin/js/20181124/87.html',
          title: '培训基地',
          imgUrl:require('./img/bg.jpg')
        },
        {
          id: '04',
          src: '/chanpinzhongxin/js/20181124/88.html',
          title: '培训基地',
          imgUrl:require('./img/bg.jpg')
        }
      ]
    }
  }
}
