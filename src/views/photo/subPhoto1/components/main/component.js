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
          imgUrl: require('./img/丝绸之路1.jpg'),
          content:'丝绸之路五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/千鸟湖1.jpg'),
          content:'千鸟湖五天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/文化馆1.jpg'),
          content:'文化馆五晚六天培训方案'
        },
        {
          url: '',
          imgUrl: require('./img/沙漠之门1.jpg'),
          content:'沙漠之门四晚五天培训方案'
        }
      ],
      contentRightList: [
        {
          url: '',
          title:'同类文章排行',
          uList: [
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            }
          ]
        },
        {
          url: '',
          title:'最新资讯文章',
          uList: [
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            },
            {
              url: '',
              title:'有哪些教学模式？'
            }
          ]
        }
      ]
    }
  }
}
