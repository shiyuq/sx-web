import ContactUs from '../../../../components/contactUs'
import RelatedInfo from '../../../../components/relatedInfo'
export default {
  name: 'Main',
  components: {
    ContactUs,
    RelatedInfo
  },
  data () {
    return {
      isCur: 1,
      des: [
        {
          url: '/mingshifengcai/',
          title:'名师风采'
        },
        {
          url: '/zhongxinketi/',
          title:'中心课题'
        }
      ],
      activeName: 'topics',
      topics: [
        '《三五九旅精神的历史传承与现实意义》',
        '《兵团红色资源的价值与利用》',
        '《传承三五九旅精神，当好兵团高质量发展的排头兵》',
        '《延安精神在西北边疆的传承与实践》',
        '《三个维度解析中国共产党的初心和使命》',
        '《中国共产党党史》',
        '《习近平关于文化建设的重要论述》',
        '《中国共产党的百年历史》',
        '《解读关于新形势下党内政治生活的若干准则》',
        '《习近平关于党的建设重要论述》',
        '《改革开放的历程与启示》',
        '《关于正确处理人民内部矛盾的问题》',
        '《习近平新时代中国特色社会主义经济思想》',
        '《世界社会主义发展史》',
        '《新中国史》',
        '《三五九旅精神》',
        '《习近平总书记关于乡村振兴战略重要论述》'
      ],
      promotes: [
        '《党务知识及基层党组织建设工作重点》',
        '《公务员职业道德建设专题讲座》',
        '《心理健康与心理调适》',
        '《提高领导干部危机管理的能力》',
        '《新疆在意识形态领域的反分裂斗争》',
        '《新疆民族史》',
        '《构建各民族互嵌式社会结构和社区环境，推动铸牢中华民族共同体意识》',
        '《网络安全应对和网络舆情处置》',
        '《“互联网+ ”经济社会发展的新引擎》'
      ],
      specials: [
        '《新疆兵团的红色基因一一三五九旅是模范》',
        '《新疆的若干历史问题白皮书》',
        '《新疆屯垦与兵团使命》',
        '《西域新疆文化的正本清源》',
        '《丝路文明与向西开放》',
        '《塔里木开发建设与发展》',
        '《南疆兵团中心城市责任与使命》'
      ]
    }
  },
  created () {},
  methods: {}
}
