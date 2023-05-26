import { createStore } from 'vuex'

import auth from './modules/auth'
import interceptors from './modules/interceptors'
import news from './modules/news'
import signals from './modules/signals'
import user from './modules/user'
import product from './modules/product'
import cart from './modules/cart'
import support from './modules/support'
import transaction from './modules/transaction'
import util from './modules/util'
import wallet from './modules/wallet'
import security from './modules/security'

import vuexPersistence from '../plugins/vue-persistence'

export default createStore({
  state: {
    appName: 'Alisuper',
    loading: false,
    progressBar: null
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    interceptors,
    news,
    signals,
    user,
    product,
    cart,
    support,
    transaction,
    util,
    wallet,
    security
  },
  plugins: [vuexPersistence.plugin]
})
