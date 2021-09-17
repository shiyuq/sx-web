import Banner from './components/banner'
import Main from './components/main'
export default {
  name: 'NewsDetail',
  components: {
    Banner,
    Main
  },
  created () {
    // console.log('this :>> ', this.$route.params);
  }
}
