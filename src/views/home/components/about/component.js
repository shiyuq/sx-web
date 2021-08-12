export default {
  name: 'About',
  data () {
    return {
      imgList: [
        {
          id: '01',
          imgUrl: require('./img/xibaipojingshen.jpg'),
          alt: '西柏坡精神',
          title: '西柏坡精神',
          content:'敢于斗争、敢于胜利的开拓进取精神；依靠群众和团结统一的民主精神；戒骄戒躁的谦虚精神、艰苦奋斗的创业精神。'
        },
        {
          id: '02',
          imgUrl: require('./img/yananjingshen.jpg'),
          alt:'延安精神',
          title: '延安精神',
          content:'实事求是、理论联系实际的精神；全心全意为人民服务的精神；自力更生、艰苦奋斗的精神。'
        },
        {
          id: '03',
          imgUrl: require('./img/changzhengjingshen.jpg'),
          alt:'长征精神',
          title: '长征精神',
          content:'乐于吃苦，不惧艰难的革命乐观主义；勇于战斗，无坚不摧的革命英雄主义；重于求实，独立自主的创新胆略；善于团结，顾全大局的集体主义。'
        },
        {
          id: '04',
          imgUrl: require('./img/jinggangshanjingshen.jpg'),
          alt:'井冈山精神',
          title: '井冈山精神',
          content:'坚定不移的革命信念；坚持党的绝对领导；密切联系人民群众的思想作风；一切从实际出发的思想路线；艰苦奋斗的作风。'
        }
      ]
    }
  }
};
