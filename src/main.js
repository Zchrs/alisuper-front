import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import globalComponents from './plugins/global';
import mixing from './plugins/mixing';
import './assets/styles.scss';
import store from './store';


const app = createApp(App);

app.use(globalComponents);
app.use(router);
app.mixin(mixing);
app.use(store);
app.mount('#app');