import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import router from './router'
import type { EventBus } from './types';

const app = createApp(App)
const eventBus: EventBus = mitt();

app.use(router);
app.provide('eventBus', eventBus);
app.mount('#app');
