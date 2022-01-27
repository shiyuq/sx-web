export default {
  props: {
    trains: {
      type: Array,
      require: true
    }
  },
  data () {
    return {}
  },
  methods: {
    click (item) {
      this.$router.push({ path: `/peixunxianlu/${item.id}` })
    }
  }
};
