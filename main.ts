import App from './App.vue'
import { createApp } from "vue";

import('./async.js').then((res) => {
  console.log(res);
})

createApp(App).mount('#app');
