import newsService from '../../api/news-service'
import trainsService from '../../api/train-service'

const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0,
    news: null,
    trains:null
  },

  mutations: {
    setCurrentActiveTabIndex (state, index) {
      state.currentActiveTabIndex = index
    },
    setNews (state, data) {
      state.news = data
    },
    setTrains (state, data) {
      state.trains = data
    }
  },

  actions: {
    async setNews ({ commit }, params) {
      const {limit = 10, offset = 0, type = ''} = params
      const { data } = await newsService.getNewsList({limit, offset, type})
      commit('setNews', data)
    },
    async setTrains ({ commit }, params) {
      const {limit = 10, offset = 0, addressId = ''} = params
      const { data } = await trainsService.getTrainList({limit, offset, addressId})
      commit('setTrains', data)
    }
  }
}

export default appModule
