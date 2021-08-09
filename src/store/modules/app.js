const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0
  },

  mutations: {
    setCurrentActiveTabIndex(state, index) {
      state.currentActiveTabIndex = index
    }
  },

  actions: {
  }
}

export default appModule
