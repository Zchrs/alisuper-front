// import axios from 'axios'

export default {
    namespaced: true,
    state: {
        carts: [],
        tokens: [],
        cart: null
    },
    getters: {},
    mutations: {
        SET_CART(state, data) {
            state.carts = data
        },
        SET_TOKENS(state, data) {
            state.tokens = data
        },
        GET_CART(state, data) {
            state.cart = data
        }
    },
    actions: {
        async getTokens(context, payload) {
            const news = await axios.get(`/app/v1/purchases/tokens`)
            context.commit('SET_TOKENS', news.data)
        },
        async storeCart(context, data) {
            const response = await axios.post('/app/v1/purchases', data)
            context.commit('SET_CART', response.data)
            return response.data
        },
        async getCartDetails(context, payload) {
            const news = await axios.get(`/app/v1/purchases/get/details/${payload}`)
            context.commit('GET_CART', news.data)
            return news.data
        }
    }
}