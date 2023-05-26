// import axios from 'axios'

export default {
    namespaced: true,
    state: {
        wallets: [],
        recovers: []
    },
    getters: {},
    mutations: {
        CLEAN_WALLET(state) {
            state.wallets = []
        },
        SET_WALLETS(state, data) {
            state.wallets = data
        },
        SET_RECOVERS(state, data) {
            state.recovers = data
        },
    },
    actions: {
        async recoverWallets(context) {
            context.commit('CLEAN_WALLET')
            const projects = await axios.get('/app/v1/wallet/recover')
            context.commit('SET_RECOVERS', projects.data)
        },
        async getWallets(context) {
            const projects = await axios.get('/app/v1/wallet')
            context.commit('SET_WALLETS', projects.data)
        },
        async saveWallets(context, data) {
            const project = await axios.post('/app/v1/wallet', data)
            return project.data
        }
    }
}