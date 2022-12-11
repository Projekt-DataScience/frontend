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
            },
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /lpa/fragen is matched
                path: 'fragen',
                name: 'LPAQuestions',
                component: LPAQuestions,
            },
            {
                path: 'audit/',
                name: 'LPAAudit',
                component: LPAAudit,
            },
            {
                path: 'analysen',
                name: 'LPAAnalytics',
                component: LPAAnalytics,
            },
            {
                path: 'konfiguration',
                name: 'LPAConfiguration',
                component: LPAConfiguration,
            },
            {
                path: 'historie',
                name: 'LPAHistory',
                component: LPAHistory,
            }
        ]
    }
]