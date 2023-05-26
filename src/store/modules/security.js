// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    asci: []
  },
  getters: {},
  mutations: {
    SET_CARTS (state, data) {
        state.cart = data
    },
    GET_ASCI (state, data) {
      state.asci = data
    }
  },
  actions: {
    async showAsci (context, payload) {
      const response = await axios.get(`/app/v1/security/asci`)
      context.commit('GET_ASCI', response.data)
      return response.data
    },
    async validateAsci (context, data) {
      const response = await axios.post('/app/v1/security/asci', data)
      context.commit('SET_CARTS', response.data)
      return response.data
    }
  }
}
