import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes } from "../modules/main/router/mainRoutes";
import { lpaRoutes } from "../modules/lpa/router/index";
import { CachedUser } from '../libraries/services/types'; 

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

  // check if token is expired
  var expiration = JSON.parse(localStorage.getItem('userExpiration') || "{}") as string;
  var isExpired = true;

  if (!(JSON.stringify(expiration) === '{}')) {
    // storage object exists
    var today = new Date();
    const timestampInSeconds = Math.floor(today.getTime() / 1000);

    if (timestampInSeconds > parseInt(expiration)) {
      //abgelaufen
      isExpired = true;
    } else {
      //nicht abgelaufen
      isExpired = false;
    }
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!(cachedUser.result === 1) || isExpired === true) {
      next({ name: 'Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router