import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/style.scss';

const app = createApp(App);
app.config.productionTip = false;
// app.component();


app.use(router);

app.mount('#app');
