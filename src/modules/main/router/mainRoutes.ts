import Dashboard from '../views/MainDashboard.vue'
import Login from '../views/Login.vue'

export const mainRoutes = [
    {
        path: '/',
        name: 'MainDashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    }

]