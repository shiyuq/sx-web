import newsService from '../../api/news-service'
import trainsService from '../../api/train-service'
import cameraService from '../../api/camera-service'
import certificateService from '../../api/certificate-service'
import teacherService from '../../api/teacher-service'

const appModule = {
  namespaced: true,
  state: {
    currentActiveTabIndex: 0,
    news: null,
    trains: null,
    cameras: null,
    certificates: null,
    teachers:null
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
    },
    setCameras (state, data) {
      state.cameras = data
    },
    setCertificates (state, data) {
      state.certificates = data
    },
    setTeachers (state, data) {
      state.teachers = data
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
    },
    async setCameras ({ commit }, params) {
      const {limit = 10, offset = 0, id = ''} = params
      const { data } = await cameraService.getCameraList({limit, offset, id})
      commit('setCameras', data)
    },
    async setCertificates ({ commit }, params) {
      const {limit = 10, offset = 0, id = ''} = params
      const { data } = await certificateService.getCertificateList({limit, offset, id})
      commit('setCertificates', data)
    },
    async setTeachers ({ commit }, params) {
      const {limit = 10, offset = 0, id = ''} = params
      const { data } = await teacherService.getTeacherList({limit, offset, id})
      commit('setTeachers', data)
    }
  }
}

export default appModule
