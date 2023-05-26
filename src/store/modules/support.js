// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    supports: []
  },
  getters: {
    /* notifiNumber (state) {
        return state.notifications.length
    } */
  },
  mutations: {
    GET_SUPPORTS (state, data) {
      state.supports = data
    },
    SET_CLEAN (state, data) {
        console.log(data, state.supports)
    }
  },
  actions: {
    async getSupports (context, payload) {
      const response = await axios.get(`/app/v1/support/${payload.user}/${payload.page}`)
      context.commit('GET_SUPPORTS', response.data)
    },
    async storeSupport (context, data) {
        const response = await axios.post('/app/v1/support', data)
        context.commit('SET_CLEAN', response.data)
        return response.data
    },
    async updateSupport (context, data) {
        const response = await axios.post('/app/v1/support/solved', data)
        context.commit('SET_CLEAN', response.data)
        return response.data
    }
  }
}
