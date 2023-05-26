// import axios from 'axios'

export default {
    namespaced: true,
    state: {
        transactions: [],
        info: {}
    },
    getters: {
        /* notifiNumber (state) {
            return state.notifications.length
        } */
    },
    mutations: {
        GET_TRANSACTIONS(state, data) {
            state.transactions = data
        },
        GET_INFO(state, data) {
            state.info = data
        }
    },
    actions: {
        async getTransactions(context, payload) {
            const promise = await axios.get(`/app/v1/transaction/${payload.type}/${payload.page}`)
            context.commit('GET_TRANSACTIONS', promise.data)
        },
        async getInfo(context) {
            const promise = await axios.get(`/app/v1/transaction/info`)
            context.commit('GET_INFO', promise.data)
        }
    }
}