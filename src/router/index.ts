import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from "./mainRoutes";
import { lpaRoutes } from "../modules/lpa/router/index";
import { CachedUser } from '../services/types';

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



router.beforeEach((to, from, next) => {
  //const store = useUser();
  var cachedUser = JSON.parse(localStorage.getItem('user') || "{}") as CachedUser;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!(cachedUser.result === 1 )) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router