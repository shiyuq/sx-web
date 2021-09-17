import newsService from '../../api/news-service'

const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0,
    news: null
  },

  mutations: {
    setCurrentActiveTabIndex (state, index) {
      state.currentActiveTabIndex = index
    },
    setNews (state, data) {
      state.news = data
    }
  },

  actions: {
    async setNews ({ commit }, params) {
      const {limit = 10, offset = 0, type = ''} = params
      const { data } = await newsService.getNewsList({limit, offset, type})
      commit('setNews', data)
    }
  }
}

export default appModule
