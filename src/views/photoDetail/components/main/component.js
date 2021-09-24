export default {
  name: 'Main',
  data () {
    return {
      pList: [
        {
          title: '上一篇',
          src: '',
          content:'培训掠影'
        },
        {
          title: '下一篇',
          src: '',
          content:'培训掠影'
        }
      ],
      introContentList: [
        {
          url: '',
          imgUrl: require('../../../../assets/丝绸之路1.jpg'),
          content:'丝绸之路五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('../../../../assets/千鸟湖1.jpg'),
          content:'千鸟湖五天培训方案'
        },
        {
          url: '',
          imgUrl: require('../../../../assets/文化馆1.jpg'),
          content:'文化馆五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('../../../../assets/沙漠之门1.jpg'),
          content:'沙漠之门四晚五天培训方案'
        }
      ],
      contentRightList: [
        {
          url: '',
          title:'同类文章排行',
          uList: [
            {
              url: 'xinwendongtai',
              title:'有哪些教学模式？'
            },
            {
              url: 'xinwendongtai',
              title:'会提供哪些教学服务？'
            },
            {
              url: 'xinwendongtai',
              title:'习近平在深入推动长江经济带发展座谈会上的讲'
            },
            {
              url: 'xinwendongtai',
              title:'习近平在中阿合作论坛第八届部长级会议开幕式'
            }
          ]
        },
        {
          url: '',
          title:'最新资讯文章',
          uList: [
            {
              url: 'xinwendongtai',
              title:'会提供哪些教学服务？'
            },
            {
              url: 'xinwendongtai',
              title:'有哪些教学模式？'
            },
            {
              url: 'xinwendongtai',
              title:'习近平在中阿合作论坛第八届部长级会议开幕式'
            },
            {
              url: 'xinwendongtai',
              title:'习近平在深入推动长江经济带发展座谈会上的讲'
            }
          ]
        }
      ]
    }
  }
}
