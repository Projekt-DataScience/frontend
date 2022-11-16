import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from "./mainRoutes";
import { lpaRoutes} from "../modules/lpa/router/index";

const routes: any[] = [
    // {
    //   path: "/:catchAll(.*)",
    //   redirect: "/",
    // },
    ...mainRoutes,
    ...lpaRoutes,
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router