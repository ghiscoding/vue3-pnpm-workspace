import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import style from '@monotest/components/dist/style.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
