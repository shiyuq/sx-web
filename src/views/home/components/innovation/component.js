export default {
  name: 'Innovation',
  data () {
    return {
      iscur: 0,
      autoplay:true,
      mList: [
        {
          title:' 形式创新 内容丰富 '
        },
        {
          title:' 1.历史文化  '
        },
        {
          title:' 2.革命传统  '
        },
        {
          title:' 3.理想信念  '
        },
        {
          title:' 4.启迪思想  '
        },
        {
          title:' 5.引导生活  '
        }
      ],
      eList: [
        {
          number: '00',
          title: '理念更新 内容创新 方式改进',
          english: 'Characteristic',
          content: ' 将感性体验与理性认知升华相结合、直观感受与现场教学相结合，使党性培训的形式和内容更加立体丰富,成功推出了“实景感受、专题教学、现场教学、仪式教学、情景教学、激情教学、音像教学、名篇诵读、拓展体验、信念教育、互动访谈、文化自信”等为一体的培训模式。',
          imgUrl:require('./img/eList-01.jpg'),
          alt:'青山鼎信正品原料'
        },
        {
          number: '01',
          title: '不忘初心 牢记使命',
          english: 'Never forget the beginning and remember the mission',
          content: ' 通过组织学员到革命圣地、旧址、纪念地开展现场教学来回顾党的理想信念、优良传统、崇高的革命精神和光辉的奋斗历史。 ',
          imgUrl:require('./img/eList-02.jpg'),
          alt:'高于同行的品质标准'
        },
        {
          number: '02',
          title: '独立自主 自力更生 艰苦奋斗',
          english: 'Independence, self-reliance and hard struggle',
          content: ' 养成密切联系群众和为人民服务的思想作风；培养实事求是、理论联系实际、谦虚谨慎等良好品质；养成艰苦奋斗、勤劳勇敢、不怕困难的品德；继承和发扬爱国主义精神和为共产主义事业而英勇牺牲的献身精神。 ',
          imgUrl:require('./img/eList-03.jpg'),
          alt:'实标厚度，把诚信刻在脸上'
        },
        {
          number: '03',
          title: '传承红色精神 坚定理想信念',
          english: 'Inheritance of Red Spirit and Firm Ideals and Beliefs',
          content: ' 红色信念教育的内涵，着力创新教育形式，积极拓展教育载体，努力实现用红色文化正本清源、凝神聚魂、壮怀励志。 ',
          imgUrl:require('./img/eList-04.jpg'),
          alt:'每支管子都有的防伪标签'
        },
        {
          number: '04',
          title: '挖掘时代价值 提高教育成效',
          english: 'Mining Value and Improving Effectiveness',
          content: ' 红色文化培训在强化德育功能的基础上，拓展其他教育功能，使之成为利用和借鉴红色培训的教育成果和经验，提高实际工作成效的手段。 ',
          imgUrl:require('./img/eList-05.jpg'),
          alt:'提供产品质保服务书'
        },
        {
          number: '05',
          title: '坚定信念 明辨是非',
          english: 'Firm faith and distinguish right from wrong',
          content: ' 每个家庭是组成社会的最小单元，红色培训教育帮助学员树立正确的人生观价值观和理想信念，带来实际生活方式、生活认知、社会责任的的真正提升。 ',
          imgUrl:require('./img/eList-06.jpg'),
          alt:'主动跟踪服务'
        }
      ]
    }
  },
  methods: {
    setIscur (index) {
      this.$refs.remarkCarusel.setActiveItem(index)
      this.iscur = index
    },
    change (index) {
      this.iscur = index
    },
    setAutoplay () {
      this.autoplay = false
    },
    changeAutoplay () {
      this.autoplay = true
    }
  }
}
