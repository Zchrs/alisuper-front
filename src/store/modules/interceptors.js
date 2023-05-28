// import axios from 'axios'

// import store from '@/store/index'
// import router from '../../router';

// axios.interceptors.request.use(req => {
// 	store.state.loading = true
//     store.state.interceptors.interceptor_errors = []
//     return req
// });

// axios.interceptors.response.use(
// 	(response) => {
// 		store.state.loading = false
// 		return response;
// 	},
// 	(error) => {
// 		store.state.loading = false
		
// 		if(error.request.status == 401) {
// 			router.push({ name: 'Login', replace: true })
// 		}

// 		if(error.response.data.message) {
// 			store.state.interceptors.interceptor_errors.push(error.response.data.message)
			
// 			if(error.request.status != 401 && error.request.status != 404) {
// 				openNotification(error.response.data.message, 'error')
// 			}
			
// 		} else {
// 			error.response.data.errors.forEach(element => {
// 				/* store.state.interceptors.interceptor_errors.push(element.message) */
// 				if(error.request.status != 401 && error.request.status != 404) {
// 					openNotification(element.message, 'error')
// 				}
// 			});
// 		}
// 	}
// );

// export default {
// 	namespaced: true,
// 	state: {
// 		interceptor_errors: []
// 	},
// 	actions: {
//         setError (context, error) {
//             context.commit('SET_USER_DATA', error)
//         }
//     },
// 	mutations: {
// 		SET_USER_DATA(state, data) {
// 			state.interceptor_errors = data
// 		}
// 	}
// }