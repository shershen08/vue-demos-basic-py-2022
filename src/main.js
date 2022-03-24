import { createApp } from 'vue';
import otusPython from '@/plugins/otus';
import App from './App.vue';
import router from './router';
import store from './store';

// component code v2==v3
// bootstrap code v2!=v3

const app = createApp(App);
app.use(store)
  .use(router);

app.use(otusPython);

app.mount('#app');
