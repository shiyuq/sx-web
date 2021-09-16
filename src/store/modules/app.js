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
    setNews ({ commit }, data) {
      commit('setNews', data)
    }
  }
}

export default appModule
