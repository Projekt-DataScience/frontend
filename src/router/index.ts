import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/test',
        name: 'Test',
        component: Home,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router