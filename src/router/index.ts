import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from "./admin";
import { dashboardRoutes } from "./dashboard";
import { lpaRoutes} from "../modules/lpa/router/index"

const routes: any[] = [
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/",
    // },
    ...dashboardRoutes,
    ...adminRoutes,
    ...lpaRoutes
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router