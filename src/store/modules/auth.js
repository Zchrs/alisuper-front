// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    access_token: null,
    user: null,
    abilities: [],
    clean: null
  },
  getters: {},
  mutations: {
    SET_USER_DATA(state, data) {
      state.user = data.user
      state.abilities = data.abilities
    },
    SET_ACCESS_TOKEN(state, data) {
      state.access_token = data.token.token
      axios.defaults.headers.common.Authorization = 'Bearer ' + data.token.token
    },
    CLEAR_USER_DATA(state, data) {
      console.log(data)
      state.access_token = null
      state.user = null
      state.abilities = []
      localStorage.removeItem('vuex')
    },
    CHANGE_URL_IMAGE_USER(state, url) {
      state.user.image = url
    },
    UPDATE_USER(state, user) {
      state.user = user
    },
    CLEAN_DATA(state, user) {
      state.clean = user
    }
  },
  actions: {
    async getIp(context, data) {
        if(data == true) {
            const geo = await axios.get('https://api.ipgeolocation.io/ipgeo?apiKey=0beff41dae52424aa29bb2628f7e27fe')
            return geo.data
        } else {
            return {
                ip: 'Dev',
                country_name: 'Dev',
                country_capital: 'Dev',
                city: 'Dev'
            }
        }
    },
    async login(context, data) {
      const response = await axios.post('/app/v1/auth/signin', data)
      context.commit('SET_ACCESS_TOKEN', response.data)
      context.dispatch('getUserInfo')
      return response.data
    },
    async register(context, data) {
      const response = await axios.post('/app/v1/auth/signup', data)
      return response.data
    },
    async getUserInfo(context) {
      const accounts = await axios.get('/app/v1/user/info')
      context.commit('SET_USER_DATA', accounts.data)
      return accounts
    },
    async logout(context) {
      const response = await axios.post('/app/v1/auth/logout')
      context.commit('CLEAR_USER_DATA', response)
      return 'success'
    },
    async reset(context, data) {
      const response = await axios.post('/app/v1/auth/reset', data)
      return response
    },
    async recover(context, payload) {
      const response = await axios.post('/app/v1/auth/restore', payload)
      return response.data
    }
  }
}