import router from "./router";

const registerModule = (module:any[]) => {
  //
};

export const registerModules = (modules: any) => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};