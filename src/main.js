import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// component code v2==v3
// bootstrap code v2!=v3

const app = createApp(App);
app.use(store)
  .use(router);

app.mount('#app');
