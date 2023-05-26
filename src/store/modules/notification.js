import axios from 'axios'

export default {
  namespaced: true,
  state: {
    notifications: []
  },
  getters: {
    notifiNumber (state) {
        return state.notifications.length
    }
  },
  mutations: {
    SET_NOTIFICATIONS (state, data) {
      state.notifications = data
    },
    UPDATE_PROJECT(state, data) {
        let objIndex = state.notifications.findIndex((obj => obj.uuid == data.uuid));
        state.notifications.splice(objIndex, 1)
    }
  },
  actions: {
    async getNotifications (context) {
      const projects = await axios.get('/app/v1/notification')
      context.commit('SET_NOTIFICATIONS', projects.data)
    },
    async disableNotifications (context, data) {
        const project = await axios.post('/app/v1/notification', data)
        context.commit('UPDATE_PROJECT', project.data)
        return project.data
    }
  }
}
