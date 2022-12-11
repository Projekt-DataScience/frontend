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
                icon: "gm",
                favourite: false,
                available: false,
                routerName: "MainDashboard"
            },
            {
                name: "Urlaubsplanung",
                icon: "up",
                favourite: false,
                available: false,
                routerName: "MainDashboard"
            },
            {
                name: "Werkzeugausgabe",
                icon: "wa",
                favourite: true,
                available: false,
                routerName: "Login"
            },
            {
                name: "Fuhrparkverwaltung",
                icon: "fv",
                favourite: false,
                available: false,
                routerName: "MainDashboard"
            },
            {
                name: "Büromaterialausgabe",
                icon: "bma",
                favourite: false,
                available: false,
                routerName: "MainDashboard"
            },
            {
                name: "Prüfmittelverwaltung",
                icon: "pv",
                favourite: false,
                available: false,
                routerName: "MainDashboard"
            }
        ] as Applications[]
    }),
    getters: {
        getApps (state) {
            return state.apps
        },
        getFavourites(state) {
            return state.apps.filter((app) => app.favourite);
        }
    }
    
}
)