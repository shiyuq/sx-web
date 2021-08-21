export default {
  name: 'Information',
  data () {
    return {
      List: [
        {
          imgUrl: require('./img/liuyan01.png'),
          name: 'name',
          value: '姓名',
          id: 'txtName',
          class:'name'
        },
        {
          imgUrl: require('./img/liuyan02.png'),
          name: 'tel',
          value: '电话',
          id: 'txtMobile',
          class:'mobile'
        }
      ]
    }
  }
}
