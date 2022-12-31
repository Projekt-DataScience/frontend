import LPADashboard from '../views/LPADashboard.vue'
import LPAQuestions from '../views/LPAQuestions.vue'
import LPAAudit from '../views/LPAAudit.vue'
import LPAHistory from '../views/LPAHistory.vue'
import LPAConfiguration from '../views/LPAConfiguration.vue'
import LPAAnalytics from '../views/LPAAnalytics.vue'

export const lpaRoutes = [
    {
        path: '/lpa',
        name: 'LPA',
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /lpa is matched
                path: '',
                name: 'LPADashboard',
                component: LPADashboard,
                meta: {
                    requiresAuth: true
                }
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /lpa/fragen is matched
                path: 'fragen',
                name: 'LPAQuestions',
                component: LPAQuestions,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'audit/',
                name: 'LPAAudit',
                component: LPAAudit,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'analysen',
                name: 'LPAAnalytics',
                component: LPAAnalytics,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'konfiguration',
                name: 'LPAConfiguration',
                component: LPAConfiguration,
                meta: {
                    requiresAuth: true
                }
            },
            {
                path: 'historie',
                name: 'LPAHistory',
                component: LPAHistory,
                meta: {
                    requiresAuth: true
                }
            }
        ]
    }
]