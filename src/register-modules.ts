import router from "./router";

const registerModule = (module:any) => {
  router.addRoute(module);
  console.log(module);
};

export const registerModules = (modules: any) => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};