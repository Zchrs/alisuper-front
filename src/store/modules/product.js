// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    products: [],
    investments: []
  },
  getters: {
    /* notifiNumber (state) {
        return state.notifications.length
    } */
  },
  mutations: {
    SET_PRODUCTS (state, data) {
      state.products = data
    },
    SET_INVESTMENT(state, data) {
        state.investments = data
    },
    ADD_INVESTMENT(state, data) {
        let objIndex = state.investment.findIndex((obj => obj.uuid == data.uuid));
        state.investment.splice(objIndex, 1)
    }
  },
  actions: {
    async getProducts (context) {
      const products = await axios.get('/app/v1/products')
      context.commit('SET_PRODUCTS', products.data)
    },
    async getInvestments (context) {
      const investments = await axios.get('/app/v1/products/my/investments')
      context.commit('SET_INVESTMENT', investments.data)
    },
    async disableNotifications (context, data) {
        const project = await axios.post('/app/v1/notification', data)
        context.commit('UPDATE_PROJECT', project.data)
        return project.data
    }
  }
}
