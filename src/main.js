import { createApp } from 'vue'
import App from './App.vue'
import router from "../src/router"
import Flutterwave from 'flutterwave-vue3'

createApp(App).use(router).use(Flutterwave).mount('#app')

