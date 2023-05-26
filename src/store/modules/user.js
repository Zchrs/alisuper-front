// import axios from 'axios'

export default {
  namespaced: true,
  state: {
    lang: 'en',
    user: [],
    detail: {},
    referrals: []
  },
  getters: {
  },
  mutations: {
    SET_USER (state, data) {
      state.user = data
    },
    SET_REFERRALS (state, data) {
        state.referrals = data
    },
    SET_LANG(state, data) {
      state.lang = data
    },
  },
  actions: {
    async chageLang(context, payload) {
      const response = await axios.post('/app/v1/user/update/lang', payload)
      context.commit('SET_LANG', response.data)
      return 'success'
    },
    async getReferrals (context, payload) {
        const news = await axios.get(`/app/v1/user/team/${payload.page}/${payload.search}`)
        context.commit('SET_REFERRALS', news.data)
    },
    async updatePersonal(context, data) {
        const response = await axios.post('/app/v1/user/update', data)
        context.commit('SET_USER', response.data)
        return response.data
    },
    async changePassword(context, data) {
        const response = await axios.post('/app/v1/user/update/password', data)
        context.commit('SET_USER', response.data)
        return response.data
    },
    async updateProfilePic(context, data) {
        try {
            const response = await axios.post('/app/v1/user/update/image', data,
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: function (progressEvent) {
                  context.rootState.progressBar = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
                }.bind(this)
              })
            
              context.commit('SET_USER', response.data)
              return response.data
        } catch (error) {
        } finally {
            context.rootState.progressBar = null;
        }
    },
    async updateKycValidation(context, data) {
      try {
          const response = await axios.post('/app/v1/user/update/verificationkyc', data,
          {
              headers: {
                'Content-Type': 'multipart/form-data'
              },
              onUploadProgress: function (progressEvent) {
                context.rootState.progressBar = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
              }.bind(this)
            })
          
            context.commit('SET_USER', response.data)
            return response.data
      } catch (error) {
      } finally {
          context.rootState.progressBar = null;
      }
  },
  }
}
