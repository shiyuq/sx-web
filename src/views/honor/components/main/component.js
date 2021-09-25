export default {
  name: 'Main',
  data () {
    return {
      iscur:0,
      // currentPage1: 5,
      // currentPage2: 5,
      // currentPage3: 5,
      // currentPage4: 4,
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
          src: '/rongyuzizhixiangqing',
          title: '荣誉证书一',
          imgUrl:require('../../../../assets/证书.jpg')
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
