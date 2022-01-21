import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
import '@/assets/css/styles.css'

createApp(App).use(store).use(router).mount('#app')


const query = qs.stringify(
    {
      sort: ["title", "slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  console.log(query);
