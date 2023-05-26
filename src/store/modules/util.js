// import axios from 'axios'

export default {
    namespaced: true,
    state: {
        countries: null,
        dashboard: null
    },
    mutations: {
        GET_COUNTRY(state, data) {
            state.countries = data
        },
        GET_DASHBOARD(state, data) {
            state.dashboard = data
        }
    },
    actions: {
        async getCountries(context) {
            const response = await axios.get(`/app/v1/utils/countries`)
            context.commit('GET_COUNTRY', response.data)
            return response.data
        },
        async getDashboard(context) {
            const response = await axios.get(`/app/v1/utils/dashboard`)
            context.commit('GET_DASHBOARD', response.data)
            return response.data
        }
    }
}