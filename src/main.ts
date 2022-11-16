import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";

/* Register Modules
import { registerModules } from "./register-modules";
import lpaModule from "./modules/lpa/index";

registerModules({
  lpa: lpaModule,
}); */

const app = createApp(App);
app.use(createPinia())
app.use(router)
app.mount('#app');