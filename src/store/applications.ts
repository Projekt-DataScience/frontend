export interface Applications {
    name: string,
    icon: string,
    favourite: boolean,
    available: boolean,
    routerName: string
}

import { defineStore } from "pinia";

export const useApplications = defineStore('Applications', {
    state: () => ({
        apps: [
            {
                name: "Layered Process Audit",
                icon: "lpa",
                favourite: true,
                available: true,
                routerName: "LPADashboard"
            },
            {
                name: "Gerätemanager",
                icon: "lpa",
                favourite: false,
                available: false,
                routerName: "LPADashboard"
            }
        ] as Applications[]
    }),
    getters: {
        /* 
        getFavourites: (state) => {
            return state.apps.filter(() => app.favourite === true)
        },
        */
        getApps: (state) => state.apps
    }
    
}
)