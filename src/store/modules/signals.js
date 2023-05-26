// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    signals: [],
    detail: {}
  },
  getters: {
    /* notifiNumber (state) {
        return state.notifications.length
    } */
  },
  mutations: {
    GET_SIGNALS (state, data) {
      state.signals = data
    }
  },
  actions: {
    async getSignals (context, payload) {
      const news = await axios.get(`/app/v1/signals/${payload.page}`)
      context.commit('GET_SIGNALS', news.data)
    },
    async getDetailSignal (context, payload) {
      const news = await axios.get(`/app/v1/signals/detail/${payload}`)
      return news.data
    }
  }
}
