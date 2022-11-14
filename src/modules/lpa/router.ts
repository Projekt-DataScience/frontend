import Module from './Module.vue'
import Home from './views/Home.vue'

const moduleRoute = {
  path: "/cart",
  component: Module,
  children: [
    {
      path: "/",
      component: Home
    }
  ]
};
console.log(moduleRoute)
export default moduleRoute