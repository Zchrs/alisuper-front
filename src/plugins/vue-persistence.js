import VuexPersistence from 'vuex-persist'

const vuexPersistence = new VuexPersistence({
  store: window.localStorage,
  key: 'vuex',
  reducer (val) {
    if (val.auth.access_token === null) {
      return {}
    }
    return val
  }
})

export default vuexPersistence
