export default {
  name: 'Main',
  data () {
    return {
      iscur:0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      list: [
        {
          url: '/xinwendongtai/6843938169323257856',
          title:'有哪些教学模式？'
        },
        {
          url: '/xinwendongtai/6843542491682045952',
          title:'会提供哪些教学服务？'
        },
        {
          url: '/xinwendongtai/6843937637581979648',
          title:'习近平在深入推动长江经济带发展座谈会上的讲'
        },
        {
          url: '/xinwendongtai/6847157567609634816',
          title:'习近平在中阿合作论坛第八届部长级会议开幕式'
        }
      ],
      cList: [
        {
          id: '01',
          src: '/peixunlueying1',
          title: '沙漠之门五晚六天培训方案',
          imgUrl:require('../../../../assets/沙漠之门1.jpg')
        },
        {
          id: '02',
          src: 'peixunlueying1',
          title: '沙漠之门四晚五天培训方案',
          imgUrl:require('../../../../assets/沙漠之门2.jpg')
        },
        {
          id: '03',
          src: 'peixunlueying1',
          title: '文化馆五晚六天培训方案',
          imgUrl:require('../../../../assets/文化馆1.jpg')
        },
        {
          id: '04',
          src: 'peixunlueying1',
          title: '文化馆四晚五天培训方案',
          imgUrl:require('../../../../assets/文化馆2.jpg')
        },
        {
          id: '05',
          src: 'peixunlueying1',
          title: '托木尔峰六天培训专题',
          imgUrl:require('../../../../assets/托木尔峰1.jpg')
        },
        {
          id: '06',
          src: 'peixunlueying1',
          title: '托木尔峰五天培训专题',
          imgUrl:require('../../../../assets/托木尔峰2.jpg')
        },
        {
          id: '07',
          src: 'peixunlueying1',
          title: '塔里木河四晚五天培训专题',
          imgUrl:require('../../../../assets/塔里木河1.jpg')
        },
        {
          id: '08',
          src: 'peixunlueying1',
          title: '塔里木河五天培训专题',
          imgUrl:require('../../../../assets/塔里木河2.jpg')
        },
        {
          id: '09',
          src: 'peixunlueying1',
          title: '千鸟湖五天培训专题',
          imgUrl:require('../../../../assets/千鸟湖1.jpg')
        },
        {
          id: '10',
          src: 'peixunlueying1',
          title: '千鸟湖五晚六天培训专题',
          imgUrl:require('../../../../assets/千鸟湖2.jpg')
        },
        {
          id: '11',
          src: 'peixunlueying1',
          title: '丝绸之路五天培训专题',
          imgUrl:require('../../../../assets/丝绸之路1.jpg')
        },
        {
          id: '12',
          src: 'peixunlueying1',
          title: '丝绸之路四天培训专题',
          imgUrl:require('../../../../assets/丝绸之路2.jpg')
        }
      ],
      tList: [
        {
          src: '/rongyuzizhi',
          title:'荣誉资质'
        },
        {
          src: 'mingshifengcai',
          title:'专业团队'
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
    },
    click (index) {
      this.iscur = index
    }
  }
}
