import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia";

/* Register Modules*/
import layeredProcessAuditModule from "./modules/lpa";

import { registerModules } from "./register-modules";

registerModules({
  lpa: layeredProcessAuditModule,
});

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')