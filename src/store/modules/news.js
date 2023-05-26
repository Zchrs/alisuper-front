// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    news: [],
    detail: {}
  },
  getters: {
    /* notifiNumber (state) {
        return state.notifications.length
    } */
  },
  mutations: {
    GET_NEWS (state, data) {
      state.news = data
    },
    GET_DETAIL(state, data) {
        state.detail = data
    }
  },
  actions: {
    async getNews (context, payload) {
      const news = await axios.get(`/app/v1/news/${payload.page}`)
      context.commit('GET_NEWS', news.data)
    },
    async showDetailNew (context, uuid) {
        const news = await axios.get(`/app/v1/news/detail/${uuid}`)
        context.commit('GET_DETAIL', news.data)
    }
  }
}
